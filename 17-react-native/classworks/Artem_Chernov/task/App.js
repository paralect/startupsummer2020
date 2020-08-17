import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/root.navigator';
import { StatusBar } from 'react-native';
import store from './resourses/store'
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#202020'} barStyle={'light-content'}/>
      <NavigationContainer>
        <AppNavigation/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
