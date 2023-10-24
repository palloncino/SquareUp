import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Router} from './src/Router';
import {ContextProvider} from './src/context';

const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
