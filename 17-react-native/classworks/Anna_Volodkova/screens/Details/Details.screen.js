import React, {useCallback, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './Details.styles';
import {AntDesign} from "@expo/vector-icons";
import {SafeAreaView} from "react-native-safe-area-context";
import Header from '../../components/header';
import CL from "../../components/comicsList";
import fetchMarvel from "../../fetchMarvel";

function DetailsScreen() {
  const { params } = useRoute();
  const { item } = params;


  const [comics, setComics] = useState(null);
  const [comicses, setComicses] = useState(null);

  const fetchData = useCallback(async () => {
    const { data } = await fetchMarvel(`/characters/${item.id}/comics`,  );
    console.log("Fetched detail comics desc HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", data.data.results[0].description);
    setComics(data.data.results[0]);
    setComicses(data.data.results)
  }, []);

  useEffect(() => {
    fetchData();
  },[]);

  const imageSource = {
    uri: item.thumbnail.path + '.' + item.thumbnail.extension,
  };

  if (!comics) return (<Text style={styles.title}>Loading</Text>);


  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.firstBlock}>
        <View style={styles.characterIcon}>
          <Image
            style={styles.img}
            source={imageSource}
          />
        </View>
        <View style={styles.nickAndFull}>
          <Text style={styles.nickname}>{item.name.toUpperCase()}</Text>
          {item.id && <Text style={styles.fullName}>{item.id}</Text>}
          <AntDesign
            style={styles.heartIcon}
            name="hearto"
          />
        </View>
      </View>
      {comics.description && <Text style={styles.description}>{comics?.description}</Text>}
      <Text style={styles.title}>COMICS</Text>
      <CL
        arr={comicses}
      />
    </SafeAreaView>
  );
}

export default DetailsScreen;
