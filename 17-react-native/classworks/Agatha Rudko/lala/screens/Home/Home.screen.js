import React, {useEffect, useCallback, useState} from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';

import styles from './Home.styles';
import fetchMarvel from "../../fetchMarvel";


const HomeScreen = () => {
  const navigation = useNavigation();
  const [heroes, setHeroes] = useState([]);

  const fetchData = async () => {
    const {data} = await fetchMarvel('/characters');
    console.log(data.data.results);
    setHeroes(data.data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (

    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Featured characters</Text>
        <ScrollView>
        {heroes.map(item => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => navigation.navigate('Details', {item})}
          >
            <Image
              style={styles.img}
              source={{
                uri: item.thumbnail.path+'.'+item.thumbnail.extension}}
            />
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.id}</Text>
            <AntDesign name="hearto" size={24} color="white" />
            <AntDesign name="heart" size={24} color="#E62429" />
          </TouchableOpacity>
        ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
