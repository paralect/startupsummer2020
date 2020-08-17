import React from 'react';
import { Text, View, ActivityIndicator, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Character from '../Character/Character';

import styles from './Home.styles';
import { useDispatch, useSelector } from 'react-redux';
import * as marvelActions from '../../resourses/marvel/marvel.actions';
import * as marvelSelectors from '../../resourses/marvel/marvel.selectors';

function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const characters = useSelector(marvelSelectors.getCharacters)
  const isFetching = useSelector(marvelSelectors.getStatus)
  const favouritesIds = useSelector(marvelSelectors.getFavouritesIds)

  const getColor = (id) => {
    console.log('id ', id);
    if(favouritesIds.includes(id)) {
      return 'red'
    } else {
      return 'grey'
    }
  }

  React.useEffect(() => {
    dispatch(marvelActions.getCharacters())
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      {!isFetching &&
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Featured characters</Text>
        {characters.length > 0 && characters.map((item, i) => (
          <View key={i + 'key'}>
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() => navigation.navigate('CharacterDetailsScreen', { item })}
            >
              <Character
                item={item}
                color = {
                  getColor(item.id)
                } />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      }
      {isFetching &&
      <ActivityIndicator justifyContent={'center'} alignSelf={'center'} size="large" color="#E62429"/>}
    </SafeAreaView>
  );
}

export default HomeScreen;
