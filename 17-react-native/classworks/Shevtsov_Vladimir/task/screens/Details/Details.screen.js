import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';

import { fetchComics } from '../../resources/marvel.action';
import { getCharacter } from '../../resources/marvel.selector';

import fav from '../../assets/fav.png';
import fav_filled from '../../assets/fav_filled.png';
import styles from './Details.styles';

function DetailsScreen() {
  const { params } = useRoute();
  const { characterId } = params;
  const dispatch = useDispatch();
  const character = useSelector(getCharacter(characterId));
  const img = character.favourite ? fav_filled : fav;

  useEffect(() => {
    dispatch(fetchComics(characterId))
  }, []);

  const renderComics = (data) => {
    return (
      <View style={styles.listItem}>
        <Image source={{ uri: `${data.item.thumbnail.path}.${data.item.thumbnail.extension}` }} style={styles.poster} />
        <Text style={{ color: '#fff' }}>{data.item.title}</Text>
      </View>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: `${character.thumbnail.path}.${character.thumbnail.extension}` }} style={styles.thumbnail} />
        <View style={styles.logoDetails}>
          <Text style={styles.name}>{character.name}</Text>
          <TouchableHighlight onPress={() => dispatch()}>
            <Image source={img} style={{ width: 20, height: 20 }} />
          </TouchableHighlight>
        </View>
      </View>
      <Text style={styles.description}>{character.description}</Text>
      <Text style={styles.title}>Comics</Text>
      <View>
        <FlatList
          data={character.comicsDetails}
          keyExtractor={(item) => item.resourceURI}
          renderItem={renderComics}
        />
      </View>
    </SafeAreaView >
  );
}

export default DetailsScreen;
