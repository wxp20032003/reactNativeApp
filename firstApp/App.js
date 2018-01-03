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
  Dimensions,
  Image

} from 'react-native';
import  MyApp from './src/Home';

import { StackNavigator } from 'react-navigation';
var { height, width } = Dimensions.get('window');

class SignIn extends React.Component {
  static navigationOptions = { header: null };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
    
        <View style={styles.avatarview}>
          <Image style={styles.avatarimage} source={require('./nsImage/nsbdlogo.png')}>
          </Image>
        </View>
        
        {/* <StatusBar hidden={false} translucent={true} backgroundColor={"#1FB9FF"} /> */}
        <View style={styles.inputview}>
          <TextInput style={styles.textinput} placeholder="请输入用户名" />
          <TextInput style={styles.textinput} placeholder="请输入密码" secureTextEntry={true} />
        </View>

        <TouchableHighlight onPress={() => navigate('Home')} style={styles.buttonBackground}>
          <Text style={styles.buttonText}>登录</Text>
        </TouchableHighlight>
      </View>
    );
  } e

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEDF1',
    alignItems:'center',
    justifyContent: 'center'
  },
  avatarview: {//登录图标区域  
    height: 150,
    backgroundColor: '#ECEDF1',
    justifyContent: 'center',
  },
  logoName:{
   height:50,
   fontSize:25
  },
  avatarimage: {//登录图标  
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  inputview: {//用户名/密码区域  
    height: 100,
    
  },
  textinput: {//用户名/密码输入框  
    flex: 1,
    borderWidth: 0,
    fontSize: 16,
    width: width - 40,
  },
  buttonBackground: {
    backgroundColor: '#5a98de',
    borderRadius: 5,
    padding: 10,
    width: width - 40,
  },
  buttonText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff'
  }
});
const SimpleApp = StackNavigator({
  SignIn: { screen: SignIn },
  Home: { screen: MyApp }
});

export default SimpleApp;
