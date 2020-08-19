import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as characterActions from '../../resources/characters/characters.actions';
import * as characterSelectors from '../../resources/characters/characters.selectors';
import styles from './Home.styles';
import CharacterItem from '../../components/CharacterItem';

function HomeScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const characters = useSelector(characterSelectors.getCharacters);

  const fetchData = useCallback(async () => {
    dispatch(characterActions.fetchData('/characters'));
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const renderCharacter = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {
        id: item.id,
        name: item.name,
        description: item.description,
        img: item.thumbnail,
      })}
    >
      <CharacterItem
        name={item.name}
        img={item.thumbnail}
        id={item.id}
      />
    </TouchableOpacity>
  );

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
          <FlatList
            data={characters}
            renderItem={renderCharacter}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
