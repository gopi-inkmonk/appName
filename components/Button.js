import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import styles from '../styles/style.js';

export default class Button extends React.Component {
  static defaultProps = {
    showMargin: true
  }
  render() {
    const {
      smStyle,
      showMargin
    } = this.props
    let
      backgroundColor,
      borderWidth = 0,
      borderColor = 'white',
      color = '#ffffff'

    let marginBottom

    if (showMargin) {
      marginBottom = 20
    }
    else {
      marginBottom = 0
    }

    if (smStyle === 'primary') {
      backgroundColor = 'orange'
      color = '#ffffff'
    }
    else if (smStyle === 'secondary') {
      backgroundColor = 'green'
      color = '#ffffff'
    }
    else {
      backgroundColor = '#ffffff'
      borderWidth = 2
      borderColor = 'orange'
      color = '#000000'
    }

    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={{ ...styles.btnContainer, backgroundColor, borderColor, borderWidth, marginBottom }}>
          <Text style={{...styles.button, color }}>
            {this.props.children}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}
