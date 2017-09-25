import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  View,
} from 'react-native';

export default class login extends Component {

  static navigationOptions = {
      title: 'Login',
  };

  constructor (props) {
    super(props);

    this._navigateToSearchScreen = this._navigateToSearchScreen.bind(this);
  }

  _navigateToSearchScreen () {
    this.props.navigation.navigate('Search');
  }

  render () {
    return (
      <View>
        <Button
          onPress={this._navigateToSearchScreen}
          title="Go To Search"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('login', () => login);
