export type RootStackParamList = {
  Home: { selectedTopic?: string } | undefined;
  TopicSelector: {tags: string[], selected?: string} | undefined;
};