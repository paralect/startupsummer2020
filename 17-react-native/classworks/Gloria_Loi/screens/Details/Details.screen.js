import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  fetchComics,
  toggleFav,
} from '../../resources/characters/characters.actions';
import { getComics } from '../../resources/characters/characters.selectors';
const logo = require('../../assets/logo.png');
import styles from './Details.styles';

const DetailsScreen = () => {
  const { params } = useRoute();
  const { id, description, name, thumbnail, isFav } = params;
  const [isFavorite, setIsFavorite] = useState(isFav);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComics(id));
  }, []);

  const comics = useSelector(getComics);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.header} source={logo} />
      <View style={styles.mainBlock}>
        <Image
          style={styles.img}
          source={{
            uri: thumbnail?.path + '.' + thumbnail?.extension,
          }}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          {!isFavorite ? (
            <TouchableOpacity
              style={styles.icon}
              onPress={() => {
                dispatch(toggleFav(id));
                setIsFavorite(!isFavorite);
              }}
            >
              <AntDesign name="hearto" size={17} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.icon}
              onPress={() => {
                dispatch(toggleFav(id));
                setIsFavorite(!isFavorite);
              }}
            >
              <AntDesign name="heart" size={17} color="red" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <ScrollView>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.name}>COMICS</Text>
        {comics &&
          comics.map((comic) => (
            <View key={comic.id} style={styles.button}>
              <Image
                style={styles.imgCom}
                source={{
                  uri: comic.thumbnail.path + '.' + comic.thumbnail.extension,
                }}
              />
              <ScrollView>
                <Text style={styles.text}>{comic.description}</Text>
              </ScrollView>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
