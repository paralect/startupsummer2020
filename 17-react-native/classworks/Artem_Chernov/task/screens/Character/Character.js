import React, { useEffect, useCallback } from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { ContextApp } from '../../reducers/marvelReducer';
import { getComics } from '../../reducers/api';

import styles from './Character.styles';
import { Feather, FontAwesome } from '@expo/vector-icons';


function Character({ item }) {
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
            <FontAwesome name="heart-o" size={24} color={'#BBBBBB'}/>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Character;
