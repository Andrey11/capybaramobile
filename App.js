import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/scenes/login';
import Search from './src/scenes/search';
import MessageViewer from './src/scenes/messageviewer';
import Settings from './src/scenes/settings';

class mobilecapybara extends React.Component {

  constructor(props){
		super(props);

    this._navigator = StackNavigator({
      Login: { screen: Login },
      Search: { screen: Search },
      MessageViewer: { screen: MessageViewer },
      Settings: { screen: Settings },
    } , {
      initialRouteName: 'Login',
    });
	}

  render() {
    let Navigator = this._navigator;

    let props = {
      testProp: 'I am a prop value'
    };

    return ( <Navigator screenProps={props} {...this.props} /> );
  }
}

AppRegistry.registerComponent('mobilecapybara', () => mobilecapybara);
