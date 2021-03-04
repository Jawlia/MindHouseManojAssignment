/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {color} from './src/theme';
import {SearchItunesStack} from './src/stack-navigator';

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor={color.defaultStatusBarColor}
        />
        <SearchItunesStack />
      </NavigationContainer>
    </>
  );
};

export default App;
