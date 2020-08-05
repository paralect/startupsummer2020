import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import fetchMarvel from '../../fetchMarvel';

import styles from './Details.styles';

const DetailsScreen = () => {
  const { params } = useRoute();
  const { id, description, name, thumbnail } = params;
  const [comics, setComics] = useState();

  const fetchData = useCallback(async () => {
console.log(id)
    const { data } =  await fetchMarvel(`/characters/${id}/comics`);
    setComics(data.data.results);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.header} source={require('../../assets/logo.png')} />
      <View style={styles.mainBlock}>
        <Image
          style={styles.img}
          source={{
            uri: thumbnail?.path + '.' + thumbnail?.extension,
          }}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <AntDesign
            name="hearto"
            size={15}
            color="white"
            style={styles.icon}
          />
        </View>
      </View>
      <ScrollView>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.name}>
          COMICS
        </Text>
        {comics && comics.map((comic)=>(
          <View
            key={comic.id}
            style={styles.button}
          >
            <Image
              style={styles.imgCom}
              source={{
                uri: comic.thumbnail.path + '.' + comic.thumbnail.extension,
              }}
            />
            <ScrollView>
              <Text style={styles.text}>{comic.title}</Text>
              <Text style={styles.text}>{comic.format}</Text>
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
