import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = (porps: any) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => porps.navigation.navigate('Signuplogin')}>
        <Text>go to Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
