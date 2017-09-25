import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/scenes/login';
import Search from './src/scenes/search';
import MessageViewer from './src/scenes/messageviewer';

const mobilecapybara = StackNavigator({
  Home: { screen: Login },
  Search: { screen: Search },
  MessageViewer: { screen: MessageViewer }
});

AppRegistry.registerComponent('mobilecapybara', () => mobilecapybara);
