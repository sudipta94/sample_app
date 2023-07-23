import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import Order from './Order';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({navigation, route}) => ({
        tabBarStyle: {
          backgroundColor: 'red',
        },
        tabBarIcon: ({color, focused, size}) => {
          let icon = '';
          if (route.name == 'Dashboard') {
            icon = 'grid-outline';
          } else if (route.name === 'Order') {
            icon = 'cube-outline';
          }
          return <Icon name={icon} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Order" component={Order} />
    </Tab.Navigator>
  );
};

export default Home;
