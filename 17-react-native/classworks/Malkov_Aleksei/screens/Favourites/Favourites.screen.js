import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import logo from '../../assets/1024px-MarvelLogo.png';
import styles from './Favourites.styles';

const favHeroes = [{
  nickname: 'GOOSE THE CAT',
  name: '',
  photo: '',
}, {
  nickname: 'DOCTOR STRANGE',
  name: 'Stephen Strange',
  photo: '',
}];

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.logo}><img src={logo} /></View>
        <Text style={styles.title}>FEATURED CHARACTERS</Text>
        {favHeroes.map(item => (
          <TouchableOpacity
            key={item}
            style={styles.char}
            onPress={() => {}}
          >
            <View style={styles.photo}><img src={logo} /></View>
            <View style={styles.info}>
              <Text style={styles.nickname}>{item.nickname}</Text>
              {item.name.length !== 0 &&
                <Text style={styles.name}>
                  {item.name}
                </Text>
              }
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
