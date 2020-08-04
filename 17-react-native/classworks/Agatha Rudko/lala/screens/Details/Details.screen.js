import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';

import styles from './Details.styles';
import fetchMarvel from "../../fetchMarvel";

function DetailsScreen() {
  const { params } = useRoute();
  const { item } = params;
  const [res, setRes] = useState([]);

  const fetchData = async () => {
    const {data} = await fetchMarvel(`/characters/${item.id}`);
    console.log(data.data.results[0].comics.items);
    setRes(data.data.results[0].comics.items);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: item.thumbnail.path+'.'+item.thumbnail.extension}}
        />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.itemText}>{item.description}</Text>
        <Text style={styles.title}>Comics</Text>
        {res.map((i) =>{
          <View style={styles.button} keys={i}>
            <Text style={styles.title}>{i.name}</Text>
          </View>
        })}
      </View>
    </SafeAreaView>
  );
}

export default DetailsScreen;
