import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { uniqBy } from 'lodash';
import { useSelector } from 'react-redux';
import { getData } from '../../resources/comics.selector';

import styles from './Home.styles';

function HomeScreen() {
  const navigation = useNavigation();
  const data = useSelector(getData);
  const results = data?.data?.results ?? [];
  const allChars = results
    .map((obj) => obj.characters)
    .reduce((acc, obj) => ({ items: [...acc.items, ...obj.items] }), { items: [] });

  const chars = uniqBy(allChars.items, 'resourceURI');

  console.log(chars);

  const createItem = (data) => {
    return (
      <View style={styles.listItem}>
        {/* <Image src={{ uri: data.poster }} /> */}
        <Text style={{ color: '#fff' }}>{data.item.name}</Text>
        <Text style={{ color: '#fff' }}>[Subtitle]</Text>
        <TouchableHighlight><Text>[Favorite icon]</Text></TouchableHighlight>
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>featured characters</Text>
      </View>
      <View>
        <FlatList data={chars} renderItem={createItem} keyExtractor={(item) => Math.random()} />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
