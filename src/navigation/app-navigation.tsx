import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../types/root-stack-param';
import HomeScreen from '../screens/home/home-screen';
import TopicSelectorScreen from '../screens/topic-selector/topic-selector-screen';
import { createStackNavigator } from '@react-navigation/stack';
import { NAVIGATION } from '../types/navigation-routes';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={NAVIGATION.HOME}component={HomeScreen} />
        <Stack.Screen name={NAVIGATION.TOPIC_SELECTOR} component={TopicSelectorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}