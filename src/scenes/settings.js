import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Button,
} from 'react-native';

import { NavigationActions } from 'react-navigation';

export default class settings extends Component {

  static navigationOptions = {
      title: 'Settings',
  };

  render () {
    let logout = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login'})
      ]
    });

    return (
      <View>
        <Button
          title="Logout"
          onPress={() => { this.props.navigation.dispatch(logout); }}
        />

      </View>

    );
  }
}

AppRegistry.registerComponent('settings', () => settings);
