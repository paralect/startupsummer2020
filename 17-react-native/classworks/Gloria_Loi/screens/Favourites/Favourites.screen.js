import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import { toggleFav } from '../../resources/characters/characters.actions';
import { getFavouriteCharacters } from '../../resources/characters/characters.selectors';

import styles from './Favourites.styles';

const MyMarvelScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const favorites = useSelector(getFavouriteCharacters);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.header} source={require('../../assets/logo.png')} />
      <Text style={styles.title}>FAVOURITE CHARACTERS</Text>
      {favorites &&
        favorites.map(({ name, id, thumbnail, description, isFav }) => (
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
    </SafeAreaView>
  );
};

export default MyMarvelScreen;
