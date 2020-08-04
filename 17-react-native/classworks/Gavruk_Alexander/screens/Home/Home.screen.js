import React, { useCallback, useState, useEffect } from 'react';
import { Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fetchMarvel from '../../fetchMarvel';

import styles from './Home.styles';
import CharacterItem from '../../components/CharacterItem';

function HomeScreen() {
  const navigation = useNavigation();

  const [characters, setCharacters] = useState([]);
  const [favouritesCharacters, setFavouriteCharacters] = useState([]);

  const fetchData = useCallback(async () => {
    const { data } = await fetchMarvel('/characters');
    setCharacters(data.data.results);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../../assets/logo.jpg')}
            style={styles.logo}
          />
          <View style={styles.content}>
            <Text style={styles.title}>FEATURED CHARACTERS</Text>
          </View>
          {
            characters.map((character) => {
              return (
                <TouchableOpacity
                  key={character.id}
                  onPress={() => navigation.navigate('Details', {
                    id: character.id,
                    favouritesCharacters,
                    name: character.name,
                    description: character.description,
                    img: character.thumbnail,
                  })}
                >
                  <CharacterItem
                    name={character.name}
                    img={character.thumbnail}
                    isFavourite={false}
                />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
