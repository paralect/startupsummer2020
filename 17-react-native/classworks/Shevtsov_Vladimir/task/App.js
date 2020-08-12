import React, { useEffect } from 'react';
import { useDispatch, Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { fetchCharacters } from './resources/comics.action';

import AppNavigation from './navigation';
import store from './resources/store';

const  App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

const Wrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}


export default Wrapper;
