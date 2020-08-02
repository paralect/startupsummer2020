import React from 'react';
import {Text, View, Image} from 'react-native';

import styles from './character.styles';
import {AntDesign} from "@expo/vector-icons";

function CharacterItem(props) {
  const imageSource = {
    uri: props.item.resourceURI,
  };

  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <View style={styles.characterIcon}>
          <Image
            style={styles.img}
            source={imageSource}
          />
        </View>
        <View style={styles.nickAndFull}>
          <Text style={styles.nickname}>{props.item.name.toUpperCase()}</Text>
          {props.item.id && <Text style={styles.fullName}>{props.item.id}</Text>}
        </View>
      </View>
      {props.icon &&
      <AntDesign
        style={styles.heartIcon}
        name="hearto"
      />}
    </View>
  );
}

export default CharacterItem;
