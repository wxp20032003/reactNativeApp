import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';
import { StackNavigator, TabBarBottom, TabNavigator } from "react-navigation";
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import FirstPage from './FirstPage';
import Contacts from './Contacts';
import Message from './Message';
import Mine from './Mine';

const MyApp = TabNavigator(
  {
    FirstPage: {
      screen: FirstPage,
    },
    Contacts: {
      screen: Contacts,
    },
    Message: {
      screen: Message,
    },
    Mine: {
      screen: Mine,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#4BC1D2',
      inactiveTintColor: '#000',
      showIcon: true,
      showLabel: true,
      upperCaseLabel: false,
      pressColor: '#823453',
      pressOpacity: 0.8,
      style: {
        backgroundColor: '#fff',
        paddingBottom: 0,
        borderTopWidth: 0.5,
        borderTopColor: '#ccc',
      },
      labelStyle: {
        fontSize: 12,
        margin: 1
      },
      indicatorStyle: { height: 0 }, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
    },
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    backBehavior: 'none',
  });

module.exports = MyApp;