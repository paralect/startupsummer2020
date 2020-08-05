import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context'

import Header from '../../components/header';
import CharactersList from '../../components/charactersList';
import * as charactersActions from '../../resources/characters/characters.actions';
import * as charactersSelectors from '../../resources/characters/characters.selectors';

import styles from './Home.styles';

function HomeScreen() {
  const dispatch = useDispatch();
  const characters = useSelector(charactersSelectors.getCharacters)

  useEffect(() => {
    dispatch(charactersActions.fetchCharacters());
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Text style={styles.title}>FEATURED CHARACTERS</Text>
      <View style={styles.center}>
        <CharactersList
          arr={characters}
          icon
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
