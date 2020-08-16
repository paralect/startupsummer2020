import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import styles from './MyMarvel.styles';

import * as actions from '../../resources/actions';
import * as selectors from '../../resources/selector';

function MyMarvelScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const marvels = useSelector(selectors.getAllMarvels);
  const favourites = useSelector(selectors.getFavMarvels);

  useEffect(() => {
    async function init() {
      try {
        await dispatch(actions.getAllMarvels());
      } catch (error) {
        // TODO
      }
    }

    init();
  }, []);

  function makeFavourated(marvel) {
    dispatch(actions.makeFavourite(marvel));
  }

  const marvelView = (data) => {
    const { item } = data;

    return (
      <TouchableOpacity
        key={item.id}
        style={styles.char}
        onPress={() => navigation.navigate('Details', { item })}
      >
        <Image
          source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
          style={styles.photo}
        />
        <View style={styles.info}>
          <Text style={styles.nickname}>
            {item.name.split('(')[0].trim()}
          </Text>
          <Text style={styles.name}>
            {item.name.split('(')[1]?.split(')')[0].trim()}
          </Text>
        </View>
        <TouchableHighlight onPress={() => makeFavourated(item)} style={styles.likebtn}>
          <AntDesign
            name={favourites.find((favM) => favM.id === item.id) ? 'heart' : 'hearto'}
            size={18}
            color={favourites.find((favM) => favM.id === item.id) ? '#ff0000' : '#BBBBBB'}
          />
        </TouchableHighlight>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>FEATURED CHARACTERS</Text>
        <FlatList
          data={marvels ? marvels : []}
          keyExtractor={(item) => String(item.id)}
          renderItem={marvelView}
        />
      </View>
    </SafeAreaView>
  );
}

export default MyMarvelScreen;
