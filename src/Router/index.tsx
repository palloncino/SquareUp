import React, {Suspense} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Explorer = React.lazy(() => import('../features/Explorer'));
const ChatUp = React.lazy(() => import('../features/ChatUp'));
const Cropper = React.lazy(() => import('../features/Cropper'));

const Stack = createStackNavigator();

export const Router = () => {
  return (
    <Suspense fallback={null}>
      <Stack.Navigator initialRouteName="Explorer">
        <Stack.Screen name="Explorer" component={Explorer} />
        <Stack.Screen name="ChatUp" component={ChatUp} />
        <Stack.Screen name="Cropper" component={Cropper} />
      </Stack.Navigator>
    </Suspense>
  );
};
