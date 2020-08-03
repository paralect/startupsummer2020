import React from 'react';
import { Text, View } from 'react-native';

import styles from './Details.styles';

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.itemText}>Details screen</Text>
      </View>
    </View>
  );
}

export default DetailsScreen;
