import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Explorer from '../features/Explorer';
import ImageModifier from '../features/ImageModifier';
import VideoModifier from '../features/VideoModifier';

const Stack = createStackNavigator();

export const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Explorer">
      <Stack.Screen name="Explorer" component={Explorer} />
      <Stack.Screen name="ImageModifier" component={ImageModifier} />
      <Stack.Screen name="VideoModifier" component={VideoModifier} />
    </Stack.Navigator>
  );
};
