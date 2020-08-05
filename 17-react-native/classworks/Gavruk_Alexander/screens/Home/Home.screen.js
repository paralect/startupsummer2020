import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import fetchMarvel from '../../fetchMarvel';
import * as characterActions from '../../resources/characters/characters.actions';
import * as characterSelectors from '../../resources/characters/characters.selectors';
import styles from './Home.styles';
import CharacterItem from '../../components/CharacterItem';

function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const characters = useSelector(characterSelectors.getCharacters);
  const favouritesCharacters = useSelector(characterSelectors.getFavouriteCharacters);
  console.log(characters);
  console.log(favouritesCharacters);

  const fetchData = useCallback(async () => {
    dispatch(characterActions.fetchData(fetchMarvel, '/characters'));
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const isFavourite = (id) => {
    return favouritesCharacters.findIndex((character) => character.id === id) !== -1;
  }

  const onFavouriteClick = (id) => {
    if (!isFavourite(id)) {
      const index = characters.findIndex((character) => character.id === id);
      if (index >= 0) {
        dispatch(characterActions.favouritesCharacters([...favouritesCharacters, characters[index]]));
      }
    }
    const index = favouritesCharacters.findIndex((character) => character.id === id);
    dispatch(characterActions.favouritesCharacters(favouritesCharacters.splice(index, 1)));
  }

  const renderCharacter = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {
        id: item.id,
        favouritesCharacters,
        name: item.name,
        description: item.description,
        img: item.thumbnail,
      })}
    >
      <CharacterItem
        name={item.name}
        img={item.thumbnail}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../../assets/logo.jpg')}
            style={styles.logo}
          />
          <View style={styles.content}>
            <Text style={styles.title}>FEATURED CHARACTERS</Text>
          </View>
          <FlatList
            data={characters}
            renderItem={renderCharacter}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
