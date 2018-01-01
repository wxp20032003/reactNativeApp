import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  StatusBar,
  TouchableHighlight,
  Dimensions

} from 'react-native';
import Detail from './Detail';

import { StackNavigator } from 'react-navigation';
var {height, width} = Dimensions.get('window');

class HomeScreen extends React.Component {
  static navigationOptions = { header: null };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* <StatusBar hidden={false} translucent={true} backgroundColor={"#1FB9FF"} /> */}
        <View style={styles.inputview}>
          <TextInput style={styles.textinput} placeholder="请输入用户名" />
          <TextInput style={styles.textinput} placeholder="请输入密码" secureTextEntry={true} />
        </View>

        <TouchableHighlight onPress={() => navigate('Detail')} style={styles.buttonBackground}>
          <Text style={styles.buttonText}>登录</Text>
        </TouchableHighlight>
      </View>
    );
  } e

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',

    alignItems: 'center',
    justifyContent: 'center'
  },
  inputview: {//用户名/密码区域  
    height: 100,
  },
  textinput: {//用户名/密码输入框  
    flex: 1,
    borderWidth: 0,
    fontSize: 16,
    width:width-40,
  },
  buttonBackground: {
    backgroundColor: '#5a98de',
    borderRadius: 5,
    padding: 10,
    width:width-40,
  },
  buttonText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff'
  }
});
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: Detail }
});

export default SimpleApp;
