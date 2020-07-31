import React from 'react';
import {Text, View, Image} from 'react-native';

import styles from './character.styles';
import {AntDesign} from "@expo/vector-icons";

function CharacterItem(props) {
  const imageSource = {
    uri: props.src,
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
          <View style={styles.nickname}><Text>{props.nickname}</Text></View>
          <View style={styles.fullName}><Text>{props.fullName}</Text></View>
        </View>
      </View>
      <View
        style={styles.heartIcon}
      >
        <AntDesign
          name="hearto"
        />
      </View>
    </View>
  );
}

export default CharacterItem;
