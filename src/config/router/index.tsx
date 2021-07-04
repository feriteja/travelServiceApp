import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigatorScreenParams} from '@react-navigation/native';
import Home, {homeParams} from './home';
import {placeDetail} from '../../screens';

export type rootParams = {
  home: NavigatorScreenParams<homeParams>;
  placeDetail: {
    name: string;
    image: any[];
  };
};

const Stack = createStackNavigator<rootParams>();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="placeDetail" component={placeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
