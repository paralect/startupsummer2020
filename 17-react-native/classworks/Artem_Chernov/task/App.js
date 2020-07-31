import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import fetchMarvel from './fetchMarvel';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './navigation/root.navigator'
import { getConfigWithoutViewProps } from 'react-native/Libraries/Utilities/verifyComponentAttributeEquivalence';
import styles from './App.styles';
import { SafeAreaView } from 'react-native';


function App() {
  const fetchData = useCallback(async () => {
    const { data } = await fetchMarvel('/characters/1009664/comics');
    console.log(data.data.results);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
