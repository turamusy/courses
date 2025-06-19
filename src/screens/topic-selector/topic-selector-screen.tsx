import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/root-stack-param';
import { styles } from './topic-selector-screen.style';
import TopicCard from '../../components/topic-card/topic-card';
import { NAVIGATION } from '../../types/navigation-routes';
import { TEXTS } from '../../constants/texts';

export default function TopicSelectorScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, NAVIGATION.TOPIC_SELECTOR>>();
  const tags: string[] = route.params?.tags || [];
  const selectedTopic: string | undefined = route.params?.selected;

  const selectTopic = (topic?: string) => {
    navigation.navigate(NAVIGATION.HOME, { selectedTopic: topic });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{TEXTS.selectTopic}</Text>
        </View>
        <FlatList
          data={[TEXTS.allTopics, ...tags]}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={5}
          removeClippedSubviews={true}
          keyExtractor={(item, index) => `${item}-${index}`}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => {
            const isSelected = (item === TEXTS.allTopics && !selectedTopic) || item === selectedTopic;
            return (
              <TopicCard
                label={item}
                isSelected={isSelected}
                onPress={() => selectTopic(item === TEXTS.allTopics ? undefined : item)}
              />
            );
          }}
        />
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={styles.closeText}>{TEXTS.closeChar}</Text>
      </TouchableOpacity>
    </>
  );
}