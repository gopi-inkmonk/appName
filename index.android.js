/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native';

import styles from './styles/style.js';


// class appName extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu12q3457u90
//
//         </Text>
//       </View>
//     );
//   }
// }

class Button extends React.Component {
  render() {
    const { bsStyle } = this.props
    let backgroundColor, borderWidth = 0, borderColor = 'white'
    if (bsStyle === 'primary') {
      backgroundColor = 'orange'
    }
    else if (bsStyle === 'secondary') {
      backgroundColor = 'green'
    }
    else {
      backgroundColor = 'red'
      borderWidth = 2
      borderColor = 'orange'
    }

    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={{  backgroundColor, borderColor, borderWidth }}>
        <Text style={{...styles.button}}>
          {this.props.children}
        </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const SideMenu = require('react-native-side-menu');

class SignupPage extends Component {

   constructor(props) {
    super(props);
    this.state = {modalVisible: false};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>

      <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={styles.popup}>
          <View style={styles.popupContent}>
            <Text>Hello World!</Text>
          </View>

          <TouchableHighlight onPress={() => {
            this.setModalVisible(!this.state.modalVisible)
          }} style={styles.btnContainer}>
            <Text style={{...styles.button, ...styles.popupBTNdefault}}>Hide Modal</Text>
          </TouchableHighlight>
         </View>
        </Modal>


        {/* <Button onPress={() => { this.setModalVisible(true) }} bsStyle="s">
          Show Modal
        </Button>

        <TouchableHighlight onPress={() => {
          this.props.setMenuVisibility(true)
        }}>
          <Text style={{ ...styles.button, backgroundColor: 'orange' }}>Show Menu</Text>
        </TouchableHighlight> */}

        <View style={styles.topStrip}>
          <TouchableHighlight onPress={() => {
            this.props.setMenuVisibility(true)
          }}>
            <Text style={styles.hamburger}>Menu</Text>
          </TouchableHighlight>

          <Text style={styles.topStrip_text}>Mafian Home</Text>

          <TouchableHighlight onPress={() => {
            this.props.setMenuVisibility(true)
          }}>
            <Text style={styles.hamburger}>Menu</Text>
          </TouchableHighlight>
        </View>

        {/* exports.displayName = (undefined: ?string);
        exports.title = '<ScrollView>';
        exports.description = 'Component that enables scrolling through child components';
        exports.examples = [
          {
            render: function() {
              var _scrollView: ScrollView;
              return (

              );
            }
          }
        ]; */}

        <View style={styles.layoutwrapper}>
          <View style={styles.menuWrapper}>
            <Text style={{ ...styles.menuText, ...styles.menuTextActive }}>Home</Text>
            <Text style={{ ...styles.menuText }}>Business Idea</Text>
          </View>

          <View style={styles.contentWrapper}>
            <ScrollView style={styles.contentWrapperScroll}>
              <Text style={styles.h1}>
                Consumer Needs
              </Text>
              <Text style={styles.para}>
                Consumer posted their problems here. You might see some of them can be actually solved by your product/service.
              </Text>
              <Text style={styles.para}>
                You can notify them about your product/service by submitting your response.
              </Text>

              <TouchableHighlight onPress={() => { this.setModalVisible(true) }} style={styles.feedThumpContainer}>
                <View style={styles.feedThump}>
                  <Text style={{ ...styles.feedContent, ...styles.feedIndus }}>TRANSPORTATION & LOGISTICS</Text>
                  <Text style={{ ...styles.feedContent, ...styles.feedTitle }}>
                    Not able to see the roads when driving in the rain
                  </Text>
                  <Text style={{ ...styles.feedContent, ...styles.feedMeta }}>
                    3000 People have this problem
                  </Text>
                  <Text style={{ ...styles.feedContent, ...styles.feedCTA }}>
                    VIEW DETAIL
                  </Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => { this.setModalVisible(true) }} style={styles.feedThumpContainer}>
                <View style={styles.feedThump}>
                  <Text style={{ ...styles.feedContent, ...styles.feedIndus }}>TRANSPORTATION & LOGISTICS</Text>
                  <Text style={{ ...styles.feedContent, ...styles.feedTitle }}>
                    Not able to see the roads when driving in the rain
                  </Text>
                  <Text style={{ ...styles.feedContent, ...styles.feedMeta }}>
                    3000 People have this problem
                  </Text>
                  <Text style={{ ...styles.feedContent, ...styles.feedCTA }}>
                    VIEW DETAIL
                  </Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => { this.setModalVisible(true) }} style={styles.feedThumpContainer}>
                <View style={styles.feedThump}>
                  <Text style={{ ...styles.feedContent, ...styles.feedIndus }}>TRANSPORTATION & LOGISTICS</Text>
                  <Text style={{ ...styles.feedContent, ...styles.feedTitle }}>
                    Not able to see the roads when driving in the rain
                  </Text>
                  <Text style={{ ...styles.feedContent, ...styles.feedMeta }}>
                    3000 People have this problem
                  </Text>
                  <Text style={{ ...styles.feedContent, ...styles.feedCTA }}>
                    VIEW DETAIL
                  </Text>
                </View>
              </TouchableHighlight>

              <Text style={styles.feedEndText}>
                You've reached the end of the page.
              </Text>
            </ScrollView>

            {/* <TouchableOpacity
              onPress={() => { _scrollView.scrollTo({y: 0}); }}>
              <Text style={styles.button}>Scroll to top</Text>
            </TouchableOpacity> */}
          </View>
        </View>

      </View>
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text>hello</Text>
      </ScrollView>
    )
  }
}

class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }
  setMenuVisibility = visibility => {
    this.setState({
      isOpen: visibility
    })
  }
  render() {
    const { isOpen } = this.state
    const menu = <Menu navigator={navigator}/>;

    return (
      <SideMenu menu={menu} isOpen={ isOpen }>
        <SignupPage setMenuVisibility={ this.setMenuVisibility } />
      </SideMenu>
    );
  }
}

AppRegistry.registerComponent('appName', () => Application);
