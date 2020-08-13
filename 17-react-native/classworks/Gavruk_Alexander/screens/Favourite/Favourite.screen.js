import React from 'react';
import { useSelector } from 'react-redux';
import { Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as characterSelectors from '../../resources/characters/characters.selectors';
import styles from './Favourite.styles';
import CharacterItem from '../../components/CharacterItem';

function HomeScreen() {
  const navigation = useNavigation();

  const characters = useSelector(characterSelectors.getCharacters);
  const favouriteCharacters = characters.filter((character) => character.isFavourite);

  const renderCharacter = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {
        id: item.id,
        name: item.name,
        description: item.description,
        img: item.thumbnail,
      })}
    >
      <CharacterItem
        name={item.name}
        img={item.thumbnail}
        id={item.id}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.jpg')}
        style={styles.logo}
      />
      <View style={styles.content}>
        <Text style={styles.title}>FAVOURITE CHARACTERS</Text>
      </View>
      <FlatList
        data={favouriteCharacters}
        renderItem={renderCharacter}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default HomeScreen;
