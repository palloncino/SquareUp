import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Explorer from '../features/Explorer';
import ChatUp from '../features/ChatUp';
import Cropper from '../features/Cropper';

const Stack = createStackNavigator();

export const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Explorer">
      <Stack.Screen name="Explorer" component={Explorer} />
      <Stack.Screen name="ChatUp" component={ChatUp} />
      <Stack.Screen name="Cropper" component={Cropper} />
    </Stack.Navigator>
  );
};
