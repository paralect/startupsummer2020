import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/1024px-MarvelLogo.png';
import styles from './Favourites.styles';

const someItems = ['Startup Summer', 'Memes'];

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.logo}><img src={logo} /></View>
        <Text style={styles.title}>FAVOURITE CHARACTERS</Text>
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

export default HomeScreen;
