import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import photo from './thor.png';
import poster from './poster.png';

import styles from './Details.styles';

function DetailsScreen() {
  const { params } = useRoute();
  const { item } = params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.photo}>
          <img src={photo} />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>Thor</Text>
          <AntDesign
            name="hearto"
            size={18}
            color={'#BBBBBB'}
            style={styles.likebtn}
          />
        </View>
      </View>
      <View>
        <Text style={styles.biography}>
          As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.
        </Text>
      </View>
      <View style={styles.comicsContainer}>
        <Text style={styles.comicsTitle}>COMICS</Text>
        <View style={styles.comic}>
          <View style={styles.comicPoster}>
            <img src={poster} />
          </View>
          <Text style={styles.comicTitle}>Thor Epic Collection: Into The Dark Nebula (Trade Paperback)</Text>
        </View>
      </View>
    </View>
  );
}

export default DetailsScreen;
