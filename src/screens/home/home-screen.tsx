import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/root-stack-param';
import { getCourses } from '../../api/api';
import { ICourse } from '../../interfaces/courses';
import { styles } from './home-screen.styles';
import CourseCard from '../../components/course-card/course-card';
import { NAVIGATION } from '../../types/navigation-routes';
import ItemSeparator from '../../components/list-separator/list-separator';
import { ITEM_HEIGHT } from './home-screen.constants';
import { TEXTS } from '../../constants/texts';

/** Course screen */
export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, NAVIGATION.HOME>>();
  const [loading, setLoading] = useState<boolean>(true);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);

  const selectedTopic: string | undefined = route.params?.selectedTopic;

  /** The function of downloading and processing courses when launching the application */
  const loadInitialCourses = useCallback(async () => {
    try {
      const coursesResponse = await getCourses();
      const coursesTags = Array.from(
        new Set(
          coursesResponse.flatMap(course => course.tags || [])
        )
      );
      setCourses(coursesResponse);
      setAllTags(coursesTags);
    } catch (error) {
      Alert.alert(TEXTS.errorTitle, TEXTS.errorLoadCourses);
    } finally {
      setLoading(false);
    }
  }, []);

  /* Getting courses */
  useEffect(() => {
    loadInitialCourses()
  }, [loadInitialCourses]);

  /** The function of filtering courses by selected topics */
  const filteredCourses = selectedTopic
    ? courses.filter(course => course.tags.includes(selectedTopic))
    : courses;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.title}>{TEXTS.loadingCourses}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(NAVIGATION.TOPIC_SELECTOR, { tags: allTags, selected: selectedTopic })}
        style={styles.topicContainer}
      >
        <Text style={styles.topicText}>
          {selectedTopic || TEXTS.allTopics}
        </Text>
        <View style={styles.iconCircle}>
          <Text style={styles.iconArrow}>▼</Text>
        </View>
      </TouchableOpacity>

      <FlatList
        data={filteredCourses}
        horizontal
        initialNumToRender={6}
        maxToRenderPerBatch={6}
        windowSize={5}
        removeClippedSubviews={true} 
        getItemLayout={(_data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <CourseCard name={item.name} image={item.image} bgColor={item.bgColor} />
        )}
      />
    </View>
  );
}
