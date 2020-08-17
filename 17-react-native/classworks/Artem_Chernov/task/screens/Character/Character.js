import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './Character.styles';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import * as marvelActions from '../../resourses/marvel/marvel.actions';

function Character({ item, color }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image
          style={styles.img}
          source={{
            uri: item.thumbnail.path + '.' + item.thumbnail.extension,
          }}
        />
        <View style={styles.description}>
          <Text style={styles.description__name}>{item.name}</Text>
          <View style={styles.view}>
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() => {
                dispatch(marvelActions.setFavourites(item.id))
              }}
            >
              <FontAwesome name="heart-o" size={24} color={color}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Character;
