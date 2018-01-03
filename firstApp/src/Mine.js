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

export default  class Mine extends React.Component {
  static navigationOptions = {
    header:null,
    tabBarLabel: '我的',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon
        name={focused?'ios-contact':'ios-contact-outline'}
        size={26}
        color={focused? 'green':'gray'}
      />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>！这是我的</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});