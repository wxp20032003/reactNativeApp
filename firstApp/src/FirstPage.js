import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  StatusBar,
  ListView,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { StackNavigator, TabBarBottom, TabNavigator } from "react-navigation";
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import ShareData from "./shareData.json";
//获取屏幕宽度
let { width, height } = Dimensions.get('window');
//常量设置
let cols = 4;
let cellWH = 50;
let vMargin = (width - cellWH * cols) / (cols + 1);
let hMargin = 20;
export class PeopleCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>中线干线工程巡查监管平台</Text>

      </View>
    );
  }
}
export default class FirstPage extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: '首页',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon
        name={focused ? 'ios-home' : 'ios-home'}
        size={26}
        color={focused ? 'green' : 'gray'}
      />
    )
  };
  constructor(props) {
    super(props);
    //1.设置数据源
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    //2.设置返回数据
    this.state = { dataSource: ds.cloneWithRows(ShareData.data) };
    thiz = this;
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        contentContainerStyle={styles.listViewStyle}
      />
    );
  }
  _renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={() => { thiz._onPress(rowData.title) }}>
        <View style={styles.innerViewStyle} backgroundColor={rowData.color}>
          <Icon name={rowData.icon} size={30} color="white" />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textStyle}>{rowData.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  _onPress(e) {

    alert(">>>点击 " + e);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  listViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  innerViewStyle: {
    width: cellWH,
    height: cellWH,
    marginLeft: vMargin,
    marginTop: hMargin,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  textView: {
    alignItems: "center",
    marginLeft: vMargin,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  textStyle: {
    fontSize: 13,
    fontWeight: ('bold', '700')
  }
});