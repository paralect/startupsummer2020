import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Text, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import fetchMarvel from '../../fetchMarvel';

import styles from './My-marvel.styles';

const MyMarvelScreen = () => {
  const [charactersData, setcharactersData] = useState();

  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    const { data } = await fetchMarvel('/characters');
    const handledData = data.data.results.map((el)=>{return {...el, isFav: false}})
    setcharactersData(handledData);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.header} source={require('../../assets/logo.png')} />
      <ScrollView>
        <Text style={styles.title}>FEATURED CHARACTERS</Text>
        {charactersData &&
          charactersData.map(({ name, id, thumbnail, description, isFav }) => (
            <TouchableOpacity
              key={id}
              style={styles.button}
              onPress={() => navigation.navigate('Details', { id, description, name, thumbnail, isFav })}
            >
              <Image
                style={styles.img}
                source={{
                  uri: thumbnail.path + '.' + thumbnail.extension,
                }}
              />
              <Text style={styles.text}>{name}</Text>
             
                {!isFav ?  
                <TouchableOpacity 
                  style={styles.icon}
                  onPress={() => dispatch({ character: { name, id, thumbnail, description }, type: "SET_TO_FAVORITES"})}
                > 
                  <AntDesign
                    name="hearto"
                    size={17}
                    color="white"
                  />
                </TouchableOpacity>
                :  
                <TouchableOpacity 
                  style={styles.icon}
                  onPress={() => dispatch({ character: { name, id, thumbnail, description, isFav }, type: "SET_TO_FAVORITES"})}
                >
                  <AntDesign
                  name="heart"
                  size={17}
                  color="red"
                  />
              </TouchableOpacity>}
            </TouchableOpacity>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyMarvelScreen;
