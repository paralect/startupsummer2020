import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';

import styles from './Favourites.styles';

const someItems = ['Startup Summer', 'Memes'];

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Favourites Screen</Text>
        <Text style={styles.subtitle}>We all love</Text>
        {someItems.map(item => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => navigation.navigate('Details', { item })}
          >
            <Text style={styles.subtitle}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
