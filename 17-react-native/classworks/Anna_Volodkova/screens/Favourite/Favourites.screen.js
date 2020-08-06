import React from 'react';
import {Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Favourites.styles';
import {SafeAreaView} from "react-native-safe-area-context";
import Header from "../../components/header";
import * as charactersActions from '../../resources/characters/characters.actions';
import * as charactersSelectors from '../../resources/characters/characters.selectors';
import CharactersList from "../../components/charactersList";

function FavouriteScreen() {
  const dispatch = useDispatch();
  const favourites = useSelector(charactersSelectors.getFavouriteCharacters)

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Text style={styles.title}>FAVOURITE CHARACTERS</Text>
      <View style={styles.center}>
        <CharactersList
          arr={favourites}
        />
      </View>
    </SafeAreaView>
  );
}

export default FavouriteScreen;
