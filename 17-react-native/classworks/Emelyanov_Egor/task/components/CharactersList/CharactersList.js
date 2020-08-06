import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import styles from './CharactersList.styles';
import inactiveHeart from '../../assets/inactive_heart.png';
import activeHeart from '../../assets/active_heart.png';
import { setFavouriteCharacter } from '../../resources/characters/characters.actions';

function CharactersList({ charactersData }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View>
    {charactersData.map(({ id, thumbnail, name, isFavourite }) => (
      <View style={styles.character} key={id}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', { id, isFavourite })}
        >
          <View style={styles.characterInfoWrapper}>
            <View style={styles.characterInfo}>
              <View>
                <Image
                  style={styles.characterImg}
                  source={{
                    uri: `${thumbnail.path}.${thumbnail.extension}`
                  }}
                />
              </View>
              <View style={styles.nameWrapper}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.realName}>Egor Elaray</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.heart}
              onPress={() => dispatch(setFavouriteCharacter(id))}
            >
              <Image
                source={isFavourite ? activeHeart : inactiveHeart}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    ))}
    </View>
  );
}

export default CharactersList;

