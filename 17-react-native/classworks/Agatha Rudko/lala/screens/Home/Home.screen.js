import React, {useEffect, useCallback, useState} from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import Header from "../../components";
import styles from './Home.styles';
import fetchMarvel from "../../fetchMarvel";


const HomeScreen = () => {
  const navigation = useNavigation();
  const [heroes, setHeroes] = useState([]);

  const fetchData = async () => {
    const {data} = await fetchMarvel('/characters');
    setHeroes( data.data.results.map((i)=>{return {...i, isFav: false}}));
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (

    <SafeAreaView style={styles.container}>
      <View>
        <Header />
        <Text style={styles.title}>Featured characters</Text>
        <ScrollView>
        {heroes.map((item, index) => (
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
            <TouchableOpacity onPress={()=>{
              let newArr = heroes.slice(0);
              newArr[index].isFav = !item.isFav;
              setHeroes(newArr)}}>
            {item.isFav ? <AntDesign name="heart" size={24} color="#E62429" /> :
            <AntDesign name="hearto" size={24} color="white" />
            }
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
