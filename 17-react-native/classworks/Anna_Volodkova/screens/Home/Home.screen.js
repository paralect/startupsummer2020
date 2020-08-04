import React, { useEffect, useCallback, useState} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './Home.styles';
import Header from '../../components/header';
import {SafeAreaView} from 'react-native-safe-area-context'
import fetchMarvel from '../../fetchMarvel';
import FL from '../../components/flatList';

function HomeScreen() {
  const [characters, setCharacters] = useState(null);

  const fetchData = useCallback(async () => {
    const { data } = await fetchMarvel('/characters',  );
    setCharacters(data.data.results);
  }, []);

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Text style={styles.title}>FEATURED CHARACTERS</Text>
      <View style={styles.center}>
        <FL
          arr={characters}
          icon
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
