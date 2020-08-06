import React, { useEffect, useCallback } from 'react';
import { Text, View, ActivityIndicator, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { ContextApp } from '../../reducers/marvelReducer';
import { getComics } from '../../reducers/api';
import Character from '../Character/Character';

import styles from './Home.styles';

function HomeScreen() {
  const navigation = useNavigation();
  const { state, dispatch } = React.useContext(ContextApp);
  React.useEffect(() => {
    getComics(dispatch).then(res => console.log(res));
    if (state.comics?.length > 0) {
      console.log('state.comics  ', state.comics[0]);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {!state.isFetching &&
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>Featured characters</Text>
        {state.comics?.length > 0 && state.comics.map((item, i) => (
          <View key={i + 'key'}>
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() => navigation.navigate('CharacterDetailsScreen', { item })}
            >
              <Character item={item}/>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      }
      {state.isFetching &&
      <ActivityIndicator justifyContent={'center'} alignSelf={'center'} size="large" color="#E62429"/>}
    </SafeAreaView>



    // state.comics.map(item)
    //
    //
    //
    // <Image
    //   style={styles.img}
    //   source={{
    //     uri: thumbnail.path + '.' + thumbnail.extension,
    //   }}
    // />

    // <View style={styles.container}>
    //   <View>
    //     <Text style={styles.title}>Home Screen</Text>
    //     {someItems.map(item => (
    //       <TouchableOpacity
    //         key={item}
    //         style={styles.button}
    //         onPress={() => navigation.navigate('CharacterDetails', { item })}
    //       >
    //         <Text>Go to CharacterDetails of {item}</Text>
    //       </TouchableOpacity>
    //     ))}
    //   </View>
    // </View>
  );
}

export default HomeScreen;
