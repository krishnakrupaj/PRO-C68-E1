import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FbTab from './screens/fb';
import InstaTab from './screens/insta';

export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FbTab},
  Instagram:{screen:InstaTab}
})
const AppContainer = createAppContainer(TabNavigator)
