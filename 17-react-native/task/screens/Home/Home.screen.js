import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/1024px-MarvelLogo.png';
import { AntDesign } from '@expo/vector-icons';
import styles from './Home.styles';

const someItems = ['Paralect', 'Startup Summer', 'Dan Krachkouski', 'Memes', 'Котики'];

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.logo}><img src={logo} /></View>
        <Text style={styles.title}>FEATURED CHARACTERS</Text>
        {someItems.map(item => (
          <TouchableOpacity
            key={item}
            style={styles.char}
            onPress={() => {}}
          >
            <View style={styles.photo}><img src={logo} /></View>
            <View style={styles.info}>
              <Text style={styles.nickname}>Go to Details of {item}</Text>
              <Text style={styles.name}>Go to Details of {item}</Text>
            </View>
            <AntDesign
              name="hearto"
              size={18}
              color={'#BBBBBB'}
              style={styles.likebtn}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default HomeScreen;
