import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './Home.styles';

const someItems = ['Paralect', 'Startup Summer', 'Dan Krachkouski', 'Memes', 'Котики'];

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Home Screen</Text>
        {someItems.map(item => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => navigation.navigate('CharacterDetails', { item })}
          >
            <Text>Go to Details of {item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default HomeScreen;
