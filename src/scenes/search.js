import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';

export default class search extends Component {

  static navigationOptions = {
      title: 'Search',
  };

  render () {
    return <Text>Search</Text>;
  }
}

AppRegistry.registerComponent('search', () => search);
