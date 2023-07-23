import {View, Text} from 'react-native';
import React from 'react';
import LoginView from './LoginView';

const Login = ({navigation, route}: LoginProps) => {
  console.log('Navigation From Index======>', route.params);

  return <LoginView navigation={navigation} />;
};

export default Login;
interface LoginProps {
  navigation?: any;
  route?: any;
}
