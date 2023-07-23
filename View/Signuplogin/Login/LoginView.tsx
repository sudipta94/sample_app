import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const LoginView = ({navigation, route}: LoginViewProps) => {
  console.log('Navigation From View======>', navigation);

  return (
    <View>
      <View>
        <Text> Login Password Form section.</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text>Go to Sin up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginView;
interface LoginViewProps {
  navigation?: any;
  route?: any;
}
