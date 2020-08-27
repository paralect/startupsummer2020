import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './Favourites.styles';

const someItems = ['Startup Summer', 'Memes'];

function MyMarvelScreen () {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Favourites Screen</Text>
        <Text style={styles.subtitle}>We all love</Text>
        {someItems.map(item => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => navigation.navigate('Details', { item })}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default MyMarvelScreen;
