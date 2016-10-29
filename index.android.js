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

import HomeFeed from './page-components/homefeed'
import CustomizeFeed from './page-components/customize-feed'
import Profile from './page-components/profile'
import PostHassle from './page-components/post-hassle'

import Button from './components/Button'

import styles from './styles/style.js';
import Icon from './components/Icon';


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

class AppHome extends Component {
  render() {
    return (
      <View style={styles.appWrapper}>
        <View style={styles.heroTab}>
          <Icon style={{...styles.tabIcon, ...styles.tabActive}} name="home"></Icon>
          <Icon style={styles.tabIcon} name="sliders"></Icon>
          <Icon style={styles.tabIcon} name="user"></Icon>
          <Icon style={{...styles.tabIcon, ...styles.plusCircle}} name="plus-circle"></Icon>
        </View>
        <HomeFeed/>
        {/* <CustomizeFeed/>
        <Profile/>
        <PostHassle/> */}
      </View>
    );
  }
}

// class Menu extends React.Component {
//   render() {
//     return (
//       <ScrollView>
//         <Text>hello</Text>
//       </ScrollView>
//     )
//   }
// }
//
// class Application extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { isOpen: false }
//   }
//   setMenuVisibility = visibility => {
//     this.setState({
//       isOpen: visibility
//     })
//   }
//   render() {
//     const { isOpen } = this.state
//     const menu = <Menu navigator={navigator}/>;
//
//     return (
//       <SideMenu menu={menu} isOpen={ isOpen }>
//         <SignupPage setMenuVisibility={ this.setMenuVisibility } />
//       </SideMenu>
//     );
//   }
// }

AppRegistry.registerComponent('appName', () => AppHome);
