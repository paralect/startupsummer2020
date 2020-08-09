import React, { useEffect, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './resources/store';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation';

import { AppLoading } from 'expo';
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
} from '@expo-google-fonts/roboto-condensed';

function App() {
  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
  });

  if (!fontsLoaded) {
    // <AppLoading />
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </Provider>
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <StatusBar style="auto" />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
