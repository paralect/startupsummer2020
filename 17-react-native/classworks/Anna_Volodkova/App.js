import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context'

import {Provider} from "react-redux";
import store from "./resources/store";

function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
     </Provider>
  );
}

export default App;
