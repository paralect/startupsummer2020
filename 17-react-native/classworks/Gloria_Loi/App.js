import React, { useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import configureStore from './resources/store';

const { store } = configureStore();

import AppNavigation from './navigation';

const App = () => (
  <Provider store={store}>
  <SafeAreaProvider>
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  </SafeAreaProvider>
  </Provider>
);

export default App;
