import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Cropper from '../features/Cropper';
import Explorer from '../features/Explorer';

const Stack = createStackNavigator();

export const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Explorer">
      <Stack.Screen name="Explorer" component={Explorer} />
      <Stack.Screen name="Cropper" component={Cropper} />
    </Stack.Navigator>
  );
};
