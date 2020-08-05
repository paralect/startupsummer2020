import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';

import styles from './Details.styles';
import fetchMarvel from "../../fetchMarvel";
import Header from "../../components";

function DetailsScreen() {
  const { params } = useRoute();
  const { item } = params;
  const [res, setRes] = useState([]);

  const fetchData = async () => {
    const {data} = await fetchMarvel(`/characters/${item.id}/comics`);
    // console.log(data.data.results);
    // data.data.results.map((i)=>console.log(i.title));
    setRes(data.data.results);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <Image
          style={styles.img}
          source={{
            uri: item.thumbnail.path+'.'+item.thumbnail.extension}}
        />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.itemText}>{item.description}</Text>
        <Text style={styles.title}>Comics</Text>
        {res.map((i) => {return(
            <TouchableOpacity style={styles.button} keys={i} onPress={()=>{}}>
              <Image
                style={styles.comicsImg}
                source={{
                  uri: i.thumbnail.path+'.'+i.thumbnail.extension}}
              />
              <Text style={styles.itemText}>{i.title}</Text>
            </TouchableOpacity>
        ) })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailsScreen;
