import React from 'react';
import { Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

import marvelLogo from '../../assets/marvel-logo.png';
import styles from './Details.styles';

function DetailsScreen() {
  const { params } = useRoute();
  const { item } = params;

  return (
    <View style={styles.container}>
       <Image
          style={styles.marvelLogo}
          source={marvelLogo}
        />
      <View>
        <Text style={styles.heroName}>{item.name.split(' (')[0]}</Text>
        <Text style={styles.personName}>{ item.name.split(' (')[1] && item.name.split(' (')[1].slice(0, -1)}</Text>
      </View>
    </View>
  );
}

export default DetailsScreen;
