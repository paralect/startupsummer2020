import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './navigation';

function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}

export default App;
