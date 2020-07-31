import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context'

function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
