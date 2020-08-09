import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/1024px-MarvelLogo.png';
import { AntDesign } from '@expo/vector-icons';
import styles from './MyMarvel.styles';

import * as actions from '../../resources/actions';
import * as selectors from '../../resources/selector';


const someItems = ['Paralect', 'Startup Summer', 'Dan Krachkouski', 'Memes', 'Котики'];

function MyMarvelScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const marvels = useSelector(selectors.getAllMarvels);

  useEffect(() => {
    async function init() {
      try {
        await dispatch(actions.getAllMarvels());
      } catch (error) {
        // TODO
      } finally {
        // TODO
      }
    }

    init();
  }, []);

  useEffect(() => {
    console.log(marvels);
  }, [marvels]);

  return (

    <View style={styles.container}>
      <View>
        <View style={styles.logo}><img src={logo} /></View>
        <Text style={styles.title}>FEATURED CHARACTERS</Text>
        {marvels?.length > 0 && marvels.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.char}
            onPress={() => navigation.navigate('Details', { item })}
          >
            <View style={styles.photo}><img src={logo} /></View>
            <View style={styles.info}>
              <Text style={styles.nickname}>
                {item.name.split('(')[0].trim()}
              </Text>
              <Text style={styles.name}>
                {item.name.split('(')[1]?.split(')')[0].trim()}
              </Text>
            </View>
            <AntDesign
              name="hearto"
              size={18}
              color={'#BBBBBB'}
              style={styles.likebtn}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default MyMarvelScreen;
