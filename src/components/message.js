'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image,
  View,
  Text,
  PixelRatio,
} from 'react-native';

export default class message extends Component {

  constructor (props) {
    super(props);
	}

  render () {
    return (
      <TouchableHighlight
        underlayColor={'rgba(0, 0, 0, 0.2)'}
        style={localstyles.message_wrapper}
        onPress={() => this.props.onPress(this.props.messageId)}>
        <Text>{this.props.message}</Text>
      </TouchableHighlight>
    );
  }
}

AppRegistry.registerComponent('message', () => message);

const localstyles = StyleSheet.create({

  message_wrapper: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomWidth: 1 / PixelRatio.get(),
  }

});
