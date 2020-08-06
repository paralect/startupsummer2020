import React from 'react';
import { Text, View, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getFavorites, getFetching } from '../../resources/comics.selector';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';

import fav from '../../assets/fav.png';
import fav_filled from '../../assets/fav_filled.png';

import styles from './Details.styles';

function DetailsScreen() {
  const { params } = useRoute();
  const { character } = params;
  const favorites = useSelector(getFavorites);
  const dispatch = useDispatch();
  const isFavorite = favorites.find((char) => char.id === character.id);
  const img = isFavorite ? fav_filled : fav;

  const renderComics = (data) => {
    return (
      <View style={styles.listItem}>
        <Image source={{ uri: data.item.thumbnail }} style={styles.poster} />
        <Text style={{ color: '#fff' }}>{data.item.name}</Text>
      </View>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: character.thumbnail }} style={styles.thumbnail} />
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
          data={character.comics.items}
          keyExtractor={(item) => item.resourceURI}
          renderItem={renderComics}
        />
      </View>
    </SafeAreaView >
  );
}

export default DetailsScreen;
