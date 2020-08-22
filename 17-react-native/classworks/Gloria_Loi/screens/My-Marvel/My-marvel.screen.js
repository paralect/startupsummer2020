import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import { getAllCharacters } from '../../resources/characters/characters.selectors';
import {
  fetchCharacters,
  toggleFav,
} from '../../resources/characters/characters.actions';

import styles from './My-marvel.styles';

const MyMarvelScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  const charactersData = useSelector(getAllCharacters);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.header} source={require('../../assets/logo.png')} />
      <ScrollView>
        <Text style={styles.title}>FEATURED CHARACTERS</Text>
        {charactersData &&
          charactersData.map(({ name, id, thumbnail, description, isFav }) => (
            <TouchableOpacity
              key={id}
              style={styles.button}
              onPress={() =>
                navigation.navigate('Details', {
                  id,
                  description,
                  name,
                  thumbnail,
                  isFav,
                })
              }
            >
              <Image
                style={styles.img}
                source={{
                  uri: thumbnail.path + '.' + thumbnail.extension,
                }}
              />
              <Text style={styles.text}>{name}</Text>
              {!isFav ? (
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => {
                    dispatch(toggleFav(id));
                  }}
                >
                  <AntDesign name="hearto" size={17} color="white" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => {
                    dispatch(toggleFav(id));
                  }}
                >
                  <AntDesign name="heart" size={17} color="red" />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyMarvelScreen;
