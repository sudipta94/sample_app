/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainRoute from './View';

const App = () => {
  return (
    <NavigationContainer>
      <MainRoute />
    </NavigationContainer>
  );
};
export default App;
