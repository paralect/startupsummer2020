import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

import fetchMarvel from '../../fetchMarvel';
import heart from '../../assets/heart.png';
import activeHeart from '../../assets/active-heart.png';

import styles from './Details.styles';

function DetailsScreen() {
  const { params } = useRoute();
  const { id, name, favouritesCharacters, img, description } = params
  console.log(id, name, favouritesCharacters, img, description);

  const [comics, setComics] = useState([]);

  const fetchData = useCallback(async () => {
    const { data } = await fetchMarvel(`/characters/${id}/comics`);
    setComics(data.data.results);
    console.log('comics ;alsdkfj;lkjasf', data.data.results);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../../assets/logo.jpg')}
            style={styles.logo}
          />
          <View style={styles.content}>
            <View style={styles.characterInfo}>
              <Image
                style={styles.characterImg}
                source={{
                  uri: `${img.path}.${img.extension}`
                }}
              />
              <View style={styles.nameContainer}>
                <Text style={styles.characterName}>{name}</Text>
                <Image source={heart} />
              </View>
            </View>
            <Text style={styles.description}>
              {description}
            </Text>
            <Text style={styles.title}>COMICS</Text>
            {
              comics.map((comicsItem) => {
                return (
                  <View key={comicsItem.id} style={styles.comicsItem}>
                    <Image
                      style={styles.comicsImg}
                      source={{
                        uri: `${comicsItem.thumbnail.path}.${comicsItem.thumbnail.extension}`,
                      }}
                    />
                    <Text style={styles.comicsName}>{comicsItem.title}</Text>
                  </View>
                )
              })
            }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailsScreen;
