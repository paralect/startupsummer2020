import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../../resources/marvel.selector';
import { toggleFavourite } from '../../resources/marvel.action';

import styles from './Home.styles';

function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const chars = useSelector(getCharacters);

  const createItem = (data) => {
    return (
      <View style={styles.listItem}>
        <TouchableHighlight onPress={() => navigation.navigate('Details', { characterId: data.item.id })} >
          <Image source={{ uri: `${data.item.thumbnail.path}.${data.item.thumbnail.extension}` }} style={styles.poster} />
        </TouchableHighlight>
        <Text style={{ color: '#fff' }}>{data.item.name}</Text>
        <TouchableHighlight onPress={() => dispatch(toggleFavourite(data.item.id))}>
          <Image
            source={require('../../assets/fav.png')}
            style={{ width: 15, height: 15 }}
          />
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/marvel.png')} style={{ width: 105, height: 40 }} />
        <Text style={styles.title}>featured characters</Text>
      </View>
      <View>
        <FlatList data={chars} renderItem={createItem} keyExtractor={(item) => item.id} />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
