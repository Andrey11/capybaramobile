import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';

export default class messageviewer extends Component {

  static navigationOptions = {
      title: 'Message Viewer',
  };

  render () {
    return <Text>I AM A MESSAGE</Text>;
  }
}

AppRegistry.registerComponent('messageviewer', () => messageviewer);
