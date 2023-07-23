import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SignupView = ({GotoLogin}: SignupViewProps) => {
  return (
    <View>
      <Text>SignupView</Text>
      <TouchableOpacity onPress={() => GotoLogin('Sudipta')}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupView;
interface SignupViewProps {
  GotoLogin?: any;
}
