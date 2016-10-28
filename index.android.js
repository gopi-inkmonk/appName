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

import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';

import styles from './styles/style.js';
import Icon from './components/Icon';
import LinearGradient from 'react-native-linear-gradient';


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
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Home' },
      { key: '2', title: 'Customize Feed' },
      { key: '3', title: 'Profile' },
      { key: '4', title: 'Post Hassle' },
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBarTop {...props} style={styles.tab}/>;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <HomeFeed/>;
    case '2':
      return <CustomizeFeed/>;
    case '3':
      return <Profile/>;
    case '4':
      return <PostHassle/>;
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
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
