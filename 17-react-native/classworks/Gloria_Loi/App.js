import React, { useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigation from './navigation';

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
