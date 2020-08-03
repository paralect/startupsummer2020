import React, {useEffect, useCallback, useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './Home.styles';
import fetchMarvel from "../../fetchMarvel";

const someItems = ['Paralect', 'Startup Summer', 'Dan Krachkouski', 'Memes', 'Котики'];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [heroes, setHeroes] = useState([]);

  const fetchData = async () => {
    const {data} = await fetchMarvel('/characters');
    console.log(data.data.results[0].characters.items[0]);
    setHeroes(data.data.results[0].characters.items);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Featured characters</Text>
        {heroes.map(item => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => navigation.navigate('Details', {item})}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default HomeScreen;
