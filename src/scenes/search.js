import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  View,
  ScrollView,
} from 'react-native';

import Message from '../components/message';

export default class search extends Component {

  static navigationOptions = ({ navigation }) => ({
      title: 'Search',
      headerLeft: null,
      headerRight:
      <TouchableHighlight
        activeOpacity={0.5}
        style={localstyles.header_right_button}
        underlayColor={'rgba(0, 0, 0, 0)'}
        onPress={() => navigation.state.params.rightButtonPressed()}>
        <Image style={localstyles.header_icon_button} source={require('../images/ic_settings.png')} />
      </TouchableHighlight>,
  });

  constructor (props) {
    super(props);

    const { params } = this.props.navigation.state;

    this.showSettings = this.showSettings.bind(this);
    this.viewMessage = this.viewMessage.bind(this);
	}

  componentDidMount () {
    this.props.navigation.setParams({ rightButtonPressed: this.showSettings });
  }

  showSettings () {
    this.props.navigation.navigate('Settings');
  }

  viewMessage (messageId) {
    this.props.navigation.navigate('MessageViewer', {message: messageId});
  }

  render () {
    return (
      <View>
        <ScrollView>
          {this.createFakeMessages(20)}
        </ScrollView>
      </View>
    );
  }

  createFakeMessages (numberOfMessages) {
    let messageList = [];
    for (var i=0; i<numberOfMessages; i++) {
      let key = 'key' + i;
      let message = 'message key is: key' + (i);
      messageList.push(this.getMessage(key, message));
    }

    return messageList;
  }

  getMessage (key, message) {
    return (
      <Message
        onPress={this.viewMessage}
        key={key}
        messageId={key}
        message={message}
      />
    );
  }
}

const localstyles = StyleSheet.create({
  header_right_button: {
    marginRight: 5,
    marginTop: 2,
  },

  header_icon_button: {
    tintColor: 'rgba(0, 0, 0, 0.8)',
    // tintColor: 'rgba(118, 200, 100, 1)',
  },

});

AppRegistry.registerComponent('search', () => search);
