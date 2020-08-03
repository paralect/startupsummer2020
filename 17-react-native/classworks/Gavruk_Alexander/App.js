import React, { useEffect, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import fetchMarvel from './fetchMarvel';
import AppNavigation from './navigation';

function App() {
  const fetchData = useCallback(async () => {
    const { data } = await fetchMarvel('/characters');
    console.log(data.data.results[0].name);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

export default App;
