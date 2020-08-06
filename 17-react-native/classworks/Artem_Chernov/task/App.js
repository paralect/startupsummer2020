import React, { useReducer } from 'react';

// import { StyleSheet, Text, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import fetchMarvel from './fetchMarvel';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/root.navigator';
import { ContextApp, initState, marvelReducer } from './reducers/marvelReducer';
import { View, Image, SafeAreaView, StatusBar } from 'react-native';
import Marvel from './assets/marvel.png';

// import { getConfigWithoutViewProps } from 'react-native/Libraries/Utilities/verifyComponentAttributeEquivalence';
import styles from './App.styles';

// import { SafeAreaView } from 'react-native';

function App() {
  const [state, dispatch] = React.useReducer(marvelReducer, initState);

  return (
      <ContextApp.Provider value={{ dispatch, state }}>
        <StatusBar backgroundColor={'#202020'} barStyle={'light-content'}/>
        <NavigationContainer>
          <AppNavigation/>
        </NavigationContainer>
      </ContextApp.Provider>
  );
}

export default App;
