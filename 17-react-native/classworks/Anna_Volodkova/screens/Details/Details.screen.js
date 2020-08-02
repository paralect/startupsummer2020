import React from 'react';
import {Image, Text, View} from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './Details.styles';
import {AntDesign} from "@expo/vector-icons";
import {SafeAreaView} from "react-native-safe-area-context";
import Header from '../../components/header';
import FL from "../../components/flatList";

function DetailsScreen() {
  const { params } = useRoute();
  const { item } = params;

  const imageSource = {
    uri: item.resourceURI,
  };

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
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.title}>COMICS</Text>
      <FL
        arr={item.comics.items}
      />
    </SafeAreaView>
  );
}

export default DetailsScreen;
