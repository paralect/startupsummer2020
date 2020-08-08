import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation';
import fetchMarvel from './fetchMarvel';
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
  const fetchData = useCallback(async () => {
    const { data } = await fetchMarvel('/characters/1009664/comics');
    console.log(data.data.results);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  if (!fontsLoaded) {
    // <AppLoading />
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
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
