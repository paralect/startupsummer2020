import * as React from 'react';
import { View, Image, Text } from 'react-native';
import heart from '../assets/heart.png';
import activeHeart from '../assets/active-heart.png';

import styles from './CharacterItem.styles';

export function CharacterItem(props) {
  const { name, img, isFavourite } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `${img.path}.${img.extension}`
        }}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.characterName}>{name}</Text>
        <Text style={styles.fullname}>Alex</Text>
      </View>
      <Image
        source={isFavourite ? activeHeart : heart}
        style={styles.heart}
      />
    </View>
  );
};

export default CharacterItem;
