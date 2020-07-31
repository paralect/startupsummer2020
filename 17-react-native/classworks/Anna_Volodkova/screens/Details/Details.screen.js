import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './Details.styles';

function DetailsScreen() {
  const { params } = useRoute();
  const { item } = params;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{item}</Text>
        <Text style={styles.itemText}>Details screen</Text>
      </View>
    </View>
  );
}

export default DetailsScreen;
