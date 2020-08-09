import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

import fetchMarvel from '../../fetchMarvel';
import { Heart } from '../../components/Heart';

import * as characterActions from '../../resources/characters/characters.actions';
import * as characterSelectors from '../../resources/characters/characters.selectors';
import styles from './Details.styles';

function DetailsScreen() {
  const { params } = useRoute();
  const { id, name, img, description } = params
  const dispatch = useDispatch();

  const comics = useSelector(characterSelectors.getComics);

  const fetchData = useCallback(async () => {
    dispatch(characterActions.fetchComics(fetchMarvel, `/characters/${id}/comics`));
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const renderComicsItem = ({ item }) => (
    <View key={item.id} style={styles.comicsItem}>
      <Image
        style={styles.comicsImg}
        source={{
          uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
        }}
      />
      <Text style={styles.comicsName}>{item.title}</Text>
    </View>
  );

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
                <Heart id={id} />
              </View>
            </View>
            <Text style={styles.description}>
              {description === '' ? 'This is absolutely secret u know' : description}
            </Text>
            <Text style={styles.title}>COMICS</Text>
            <FlatList
              data={comics}
              renderItem={renderComicsItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailsScreen;
