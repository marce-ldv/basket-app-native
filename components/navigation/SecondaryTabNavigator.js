import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../TabBarIcon';
import Login from '../containers/Login';
import Register from '../containers/Register';


const LoginStack = createStackNavigator({
  Login: Login,
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-log-in' : 'md-log-in'}
    />
  ),
};

const RegisterStack = createStackNavigator({
    Register: Register,
});

RegisterStack.navigationOptions = {
  tabBarLabel: 'Register',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person-add' : 'md-person-add'}
    />
  ),
};


export default createBottomTabNavigator({
  LoginStack,
  RegisterStack
});
