import React from 'react';
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Favourites.styles';
import Character from '../Character';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import * as marvelSelectors from '../../resourses/marvel/marvel.selectors';

function Favourites(props) {
  const navigation = useNavigation();
  const favourites = useSelector(marvelSelectors.getFavourites);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Favourite characters</Text>
        {favourites.length > 0 && favourites.map((item, i) => (
          <View key={i + 'key'}>
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() => navigation.navigate('CharacterDetailsScreen', { item })}
            >
              <Character item={item} color={'red'}/>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Favourites;
