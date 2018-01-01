import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  StatusBar

} from 'react-native';
import Detail from './Detail';

import { StackNavigator } from 'react-navigation';
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

        <View style={styles.buttonview}>
          <Button
            onPress={() => navigate('Detail')}
            title="登录"
            color="#841584"
            accessibilityLabel="Learn more about this purple button" />
        </View>
      </View>
    );
  } e

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1FB9FF',

    alignItems: 'center',
    justifyContent: 'center'
  },
  inputview: {//用户名/密码区域  
    height: 100,
    width: 200,
  },
  textinput: {//用户名/密码输入框  
    flex: 1,
    borderWidth: 0,
    fontSize: 16,
  },
  buttomview: {
    backgroundColor: '#ECEDF1',
    flex: 1,
    width: 200
  },
});
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: Detail }
});

export default SimpleApp;
