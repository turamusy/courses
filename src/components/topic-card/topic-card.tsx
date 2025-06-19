import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './topic-card.style';
import { ITopicCard } from '../../interfaces/topic-card';

/** Topic selection card */
const TopicCard: React.FC<ITopicCard> = ({ label, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.topicButton, isSelected && styles.selectedButton]}
    >
      <Text style={[styles.topicText, isSelected && styles.selectedText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TopicCard;
