import {View, Text} from 'react-native';
import React from 'react';
import SignupLogin from './SignupLogin';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
const Stack = createStackNavigator();
const MainRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'red',
        headerStyle: {
          backgroundColor: 'blue',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signuplogin" component={SignupLogin} />
    </Stack.Navigator>
  );
};

export default MainRoute;
