import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/root-stack-param';
import { styles } from './topic-selector-screen.style';
import TopicCard from '../../components/topic-card/topic-card';
import { NAVIGATION } from '../../types/navigation-routes';

export default function TopicSelectorScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, NAVIGATION.TOPIC_SELECTOR>>();
  const tags: string[] = route.params?.tags || [];
  const selectedTopic: string | undefined = route.params?.selected;

  const selectTopic = (topic?: string) => {
    navigation.navigate('Home', { selectedTopic: topic });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Выбор темы</Text>
        </View>
        <FlatList
          data={['Все темы', ...tags]}
          keyExtractor={(item, index) => `${item}-${index}`}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => {
            const isSelected = (item === 'Все темы' && !selectedTopic) || item === selectedTopic;
            return (
              <TopicCard
                label={item}
                isSelected={isSelected}
                onPress={() => selectTopic(item === 'Все темы' ? undefined : item)}
              />
            );
          }}
        />
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>
    </>
  );
}