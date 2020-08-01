import React, { useCallback, useEffect, useState } from 'react';
import { Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import fetchMarvel from '../../fetchMarvel';

import styles from './My-marvel.styles';

const MyMarvelScreen = () => {
  const [charactersData, setcharactersData] = useState();

  const fetchData = useCallback(async () => {
    const { data } = await fetchMarvel('/characters');
    setcharactersData(data.data.results);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.header} source={require('../../assets/logo.png')} />
      <ScrollView>
        <Text style={styles.title}>FEATURED CHARACTERS</Text>
        {charactersData &&
          charactersData.map(({ name, id, thumbnail }) => (
            <TouchableOpacity
              key={id}
              style={styles.button}
              onPress={() => navigation.navigate('Details', { id })}
            >
              <Image
                style={styles.img}
                source={{
                  uri: thumbnail.path + '.' + thumbnail.extension,
                }}
              />
              <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyMarvelScreen;
