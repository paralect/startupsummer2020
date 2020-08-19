import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './Favourites.styles';
import marvelLogo from '../../assets/logo.png';
import { getFavouriteCharacters } from '../../resources/characters/characters.selectors';
import CharactersList from '../../components/CharactersList';

function FavouritesScreen() {
  const favouritesCharacters = useSelector(getFavouriteCharacters);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={marvelLogo}
          />
          <View>
            <Text style={styles.title}>FAVOURITE CHARACTERS</Text>
            {favouritesCharacters &&
            <CharactersList charactersData={favouritesCharacters} />}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default FavouritesScreen;
