import React, { useEffect, useCallback, useState } from 'react';
import { Text, View, Image, ScrollView , SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Details.styles';
import marvelLogo from '../../assets/logo.png';
import inactiveHeart from '../../assets/inactive_heart.png';
import activeHeart from '../../assets/active_heart.png';
import { fetchComics } from '../../resources/characters/characters.actions';
import { getCharacter } from '../../resources/characters/characters.selectors';


function DetailsScreen() {
  const dispatch = useDispatch();
  const { params } = useRoute();
  const { id, isFavourite } = params;

  const characterData = useSelector((store) => getCharacter(store, id));

  useEffect(() => {
    dispatch(fetchComics(id));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={marvelLogo}
          />
          {characterData &&
          <View>
            <View>
              <View style={styles.character}>
                <Image
                  style={styles.characterImg}
                  source={{
                    uri: `${characterData.thumbnail.path}.${characterData.thumbnail.extension}`
                  }}
                />
                <View style={styles.nameWrapper}>
                  <Text style={styles.name}>{characterData.name}</Text>
                  <Image
                    source={isFavourite ? activeHeart : inactiveHeart}
                  />
                </View>
              </View>
              <Text style={styles.description}>{characterData.description}</Text>
            </View>
            <Text style={styles.comics}>COMICS</Text>
            {characterData.comicsArray &&
            <View>
            {characterData.comicsArray.map(({ id, thumbnail, title }) => (
              <View style={styles.comicsContent} key={id}>
                <View style={styles.comicsInfoWrapper}>
                  <View style={styles.comicsInfo}>
                    <View>
                      <Image
                        style={styles.comicsImg}
                        source={{
                          uri: `${thumbnail.path}.${thumbnail.extension}`
                        }}
                      />
                    </View>
                    <Text style={styles.title}>{title}</Text>
                  </View>
                </View>
              </View>
            ))}
            </View>}
          </View>
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailsScreen;
