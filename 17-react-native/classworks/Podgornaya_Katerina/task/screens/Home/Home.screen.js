import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './Home.styles';
import marvelLogo from '../../assets/favicon.png';

const someItems = ['Paralect', 'Startup Summer', 'Dan Krachkouski', 'Memes', 'Котики', 'Hello'];

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.marvelLogo}>
        <Image
           source={marvelLogo}
        />
      </View>
      <View>
        <Text style={styles.title}>Featured characters</Text>
        {someItems.map(item => (
          <TouchableOpacity
            key={item}
            style={styles.character}
            onPress={() => navigation.navigate('Details', { item })}
          >
            <Text>Go to Details of {item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default HomeScreen;
