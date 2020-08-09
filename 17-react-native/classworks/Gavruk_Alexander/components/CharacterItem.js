import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { Heart } from '../components/Heart';
import styles from './CharacterItem.styles';

export function CharacterItem(props) {
  const { id, name, img } = props;

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
      <Heart id={id} style={styles.heart} />
    </View>
  );
};

export default CharacterItem;
