import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import styles from './Favourites.styles';
import * as selectors from '../../resources/selector';
import * as actions from '../../resources/actions';

function HomeScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const favourites = useSelector(selectors.getFavMarvels);

  function unfavourate(id) {
    dispatch(actions.makeFavourite(id));
  }

  const marvelView = (data) => {
    const { item } = data;

    return (
      <TouchableOpacity
        key={item.id}
        style={styles.char}
        onPress={() => navigation.navigate('Details', { item })}
      >
        <Image
          source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
          style={styles.photo}
        />
        <View style={styles.info}>
          <Text style={styles.nickname}>{item.nickname}</Text>
          {item.name.length !== 0 &&
            <Text style={styles.name}>
              {item.name}
            </Text>
          }
        </View>
        <TouchableHighlight onPress={() => unfavourate(item.id)} style={styles.likebtn}>
          <AntDesign
            name="heart"
            size={18}
            color={'#ff0000'}
          />
        </TouchableHighlight>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>FEATURED CHARACTERS</Text>
        <FlatList
          data={favourites ? favourites : []}
          keyExtractor={(item) => item.id}
          renderItem={marvelView}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
