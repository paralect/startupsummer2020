import React from 'react';
import { Text,
  View,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './Home.styles';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.jpg')}
        style={styles.logo}
      />
      <View style={styles.content}>
        <Text style={styles.title}>FEATURED CHARACTERS</Text>
      </View>
    </View>
  );
}

export default HomeScreen;
