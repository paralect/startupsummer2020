import React from 'react';
import { Provider } from 'react-redux';

import AppNavigation from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import store from './resources/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
