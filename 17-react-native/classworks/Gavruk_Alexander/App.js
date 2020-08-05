import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";

import store from './resources/store';
import AppNavigation from './navigation';

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
