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

/*  */
export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, NAVIGATION.HOME>>();
  const [loading, setLoading] = useState<boolean>(true);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);

  const selectedTopic: string | undefined = route.params?.selectedTopic;

  /*  */
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
      Alert.alert('Возникла ошибка', 'Не удалось загрузить курсы. Пожалуйста, попробуйте позже.');
    } finally {
      setLoading(false);
    }
  }, []);

  /* Getting courses */
  useEffect(() => {
    loadInitialCourses()
  }, [loadInitialCourses]);


  const filteredCourses = selectedTopic
    ? courses.filter(course => course.tags.includes(selectedTopic))
    : courses;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.title}>Загрузка курсов...</Text>
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
          {selectedTopic || 'Все темы'}
        </Text>
        <View style={styles.iconCircle}>
          <Text style={styles.iconArrow}>▼</Text>
        </View>
      </TouchableOpacity>

      <FlatList
        data={filteredCourses}
        horizontal
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{ width: 18 }} />}
        renderItem={({ item }) => (
          <CourseCard name={item.name} image={item.image} bgColor={item.bgColor} />
        )}
      />
    </View>
  );
}
