import React from 'react';
import { Text, View, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getFavourites } from '../../resources/marvel.selector';
import { removeFromFavorites } from '../../resources/marvel.action';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';

import styles from './Favourite.styles';

function FavouriteScreen() {
  const chars = useSelector(getFavourites);
  const dispatch = useDispatch();

  const createItem = (data) => {
    return (
      <View style={styles.listItem}>
        <Image source={{ uri: `${data.item.thumbnail.path}.${data.item.thumbnail.extension}` }} style={styles.poster} />
        <Text style={{ color: '#fff' }}>{data.item.name}</Text>
        <TouchableHighlight onPress={() => dispatch(removeFromFavorites(data.item.id))}>
          <Image
            source={require('../../assets/fav_filled.png')}
            style={{ width: 15, height: 15 }}
          />
        </TouchableHighlight>
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/marvel.png')} style={{ width: 105, height: 40 }} />
        <Text style={styles.title}>Favorite characters</Text>
      </View>
      <View>
        <FlatList data={chars} renderItem={createItem} keyExtractor={(item) => item.id} />
      </View>
    </SafeAreaView>
  );
}

export default FavouriteScreen;
