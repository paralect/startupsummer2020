import React, { useEffect } from 'react';
import { Text, View, Image, ScrollView , SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './MyMarvel.styles';
import marvelLogo from '../../assets/logo.png';
import { getCharacters } from '../../resources/characters/characters.selectors';
import { fetchCharacters } from '../../resources/characters/characters.actions';
import CharactersList from '../../components/CharactersList';

function MyMarvelScreen() {
  const dispatch = useDispatch();

  const charactersData = useSelector(getCharacters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={marvelLogo}
          />
          <View>
            <Text style={styles.title}>FEATURED CHARACTERS</Text>
            {charactersData &&
            <CharactersList charactersData={charactersData} />}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MyMarvelScreen;
