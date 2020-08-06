import React, {useCallback, useEffect, useState } from 'react';
import {Image, Text, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";

import styles from './Details.styles';
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '../../components/header';
import CharactersList from '../../components/comicsList';
import * as charactersActions from '../../resources/characters/characters.actions';
import * as charactersSelectors from "../../resources/characters/characters.selectors";

function DetailsScreen() {
  const { params } = useRoute();
  const { item } = params;
  const dispatch = useDispatch();

  const character = useSelector((state) => charactersSelectors.getCharacter(state, item.id));
  console.log("CHARACTER", typeof character.description, character.description);

  if(!character) return (<Text style={styles.title}>Loading</Text>);

  useEffect(() => {
    if(!character.comicsArray){
      dispatch(charactersActions.fetchComics(item.id));
    }
  },[]);

  const imageSource = {
    uri: character.thumbnail.path + '.' + character.thumbnail.extension,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.firstBlock}>
        <View style={styles.characterIcon}>
          <Image
            style={styles.img}
            source={imageSource}
          />
        </View>
        <View style={styles.nickAndFull}>
          <Text style={styles.nickname}>{character.name.toUpperCase()}</Text>
          <Text style={styles.fullName}>{character.id}</Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(charactersActions.switchFavourite(character.id));
            }}
          >
            <AntDesign
              style={character.isFav ? styles.heartIconClicked : styles.heartIcon}
              name="heart"
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.description}>{character.description}</Text>
      <Text style={styles.title}>COMICS</Text>
      {character.comicsArray &&
        <CharactersList
          arr={character.comicsArray}
        />
      }
    </SafeAreaView>
  );
}

export default DetailsScreen;
