import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {dashBoard, myTickets, placeToVisit, profile} from '../../screens';

import IconFeather from 'react-native-vector-icons/Feather';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';

export type homeParams = {
  dashBoard: undefined;
  placeToVisit: undefined;
  myTickets: undefined;
  profile: undefined;
};

const Tab = createBottomTabNavigator<homeParams>();

const home = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{flex: 1}}
      tabBarOptions={{
        showLabel: false,
        // tabStyle: {backgroundColor: 'red'},
        style: {
          marginHorizontal: 20,
          position: 'absolute',
          borderRadius: 999,
          bottom: 15,
          height: 60,
          elevation: 2,
          // backgroundColor: 'red',
        },
      }}>
      <Tab.Screen
        name="dashBoard"
        component={dashBoard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <IconFeather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="placeToVisit"
        component={placeToVisit}
        options={{
          tabBarLabel: 'Place',
          tabBarIcon: ({color, size}) => (
            <IconMI name="place" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="myTickets"
        component={myTickets}
        options={{
          tabBarLabel: 'My Ticket',
          tabBarIcon: ({color, size}) => (
            <IconMCI
              name="ticket-confirmation-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={profile}
        options={{
          tabBarLabel: 'My Ticket',
          tabBarIcon: ({color, size}) => (
            <IconFA name="user-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default home;
