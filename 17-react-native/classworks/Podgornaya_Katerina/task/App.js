import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import fetchMarvel from './fetchMarvel';
import store from './resources/store';

import AppNavigation from './navigation';

function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </ReduxProvider>
  );
}

export default App;
