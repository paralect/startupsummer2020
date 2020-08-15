import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { SafeAreaProvider } from 'react-native-safe-area-context'

import AppNavigation from './navigation';

function App() {
  return (
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
  );
}

export default App;
