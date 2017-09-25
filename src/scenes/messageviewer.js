import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  View,
} from 'react-native';

export default class messageviewer extends Component {

  static navigationOptions = ({ navigation }) => ({
      title: 'Message Viewer',
      headerRight:
      <View style={localstyles.header_right_button}>
        <TouchableHighlight
          activeOpacity={0.5}
          style={{marginRight: 5}}
          underlayColor={'rgba(0, 0, 0, 0)'}
          onPress={() => navigation.state.params.prevMessage()}>
          <Image style={localstyles.header_icon_button} source={require('../images/ic_navigate_before.png')} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.5}
          style={{marginRight: 5}}
          underlayColor={'rgba(0, 0, 0, 0)'}
          onPress={() => navigation.state.params.nextMessage()}>
          <Image style={localstyles.header_icon_button} source={require('../images/ic_navigate_next.png')} />
        </TouchableHighlight>
      </View>,
  });

  constructor (props) {
    super(props);

    const { params } = this.props.navigation.state;

    this.showNextMessage = this.showNextMessage.bind(this);
    this.showPreviousMessage = this.showPreviousMessage.bind(this);
	}

  componentDidMount () {
    this.props.navigation.setParams({
      prevMessage: this.showPreviousMessage,
      nextMessage: this.showNextMessage,
    });
  }

  showNextMessage () {
    console.log('showNextMessage');
  }

  showPreviousMessage () {
    console.log('showPreviousMessage');
  }

  render () {

    let params = this.props.navigation.state.params;
    let text = 'I AM A MESSAGE from: ' + params.message;

    return (<Text>{text}</Text>);
  }
}

const localstyles = StyleSheet.create({
  header_right_button: {
    flexDirection: 'row',
  },

  header_icon_button: {
    tintColor: 'rgba(0, 0, 0, 0.8)',
  },

});

AppRegistry.registerComponent('messageviewer', () => messageviewer);
