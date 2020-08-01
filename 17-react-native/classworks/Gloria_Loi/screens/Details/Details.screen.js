import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import fetchMarvel from '../../fetchMarvel';

import styles from './Details.styles';

const DetailsScreen = () => {
  const { params } = useRoute();
  const { id } = params;
  const [details, setDetails] = useState();

  const fetchData = useCallback(async () => {
    const { data } = await fetchMarvel(`/characters/${id}`);
    setDetails(data.data.results[0]);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.header} source={require('../../assets/logo.png')} />
      <Text>{details?.name}</Text>
      <Text>{details?.description}</Text>
      <Image
        style={styles.img}
        source={{
          uri: details?.thumbnail.path + '.' + details?.thumbnail.extension,
        }}
      />
    </SafeAreaView>
  );
};

export default DetailsScreen;
