import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './character.styles';
import { AntDesign } from '@expo/vector-icons';
import * as charactersActions from '../../resources/characters/characters.actions';
import { useDispatch } from 'react-redux';

function CharacterItem(props) {
  const imageSource = {
    uri: props.item.thumbnail.path + '.' + props.item.thumbnail.extension,
  };

  const dispatch = useDispatch();

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
          <Text style={styles.fullName}>{props.item.id}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(charactersActions.switchFavourite(props.item.id));
        }}
      >
        <AntDesign
          style={props.item.isFav ? styles.heartIconClicked : styles.heartIcon}
          name="heart"
        />
      </TouchableOpacity>
    </View>
  );
}

export default CharacterItem;
