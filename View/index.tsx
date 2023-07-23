import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Signuplogin from './Signuplogin';
const Stack = createNativeStackNavigator();
const MainRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignupLogin" component={Signuplogin} />
    </Stack.Navigator>
  );
};

export default MainRoute;
