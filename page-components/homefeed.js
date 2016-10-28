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

import FeedCard from '../components/FeedCard'

import styles from '../styles/style.js';
import Icon from '../components/Icon';
import LinearGradient from 'react-native-linear-gradient';

export default class HomeFeed extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Icon name="bars" style={styles.hamburger}></Icon> */}

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

              {/* <Icon.Button name="facebook" backgroundColor="#3b5998">
                <Text style={{fontFamily: 'Arial', fontSize: 15, color:'#ffffff'}}>Login with Facebook</Text>
              </Icon.Button> */}

              <View style={styles.loginContainer}>
                <TouchableOpacity>
                  <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
                      Sign in with Facebook
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>

              <FeedCard/>

              <FeedCard/>


              <Text style={styles.feedEndText}>
                You've reached the end of the page.
              </Text>
            </ScrollView>

            {/* <TouchableOpacity
              onPress={() => { _scrollView.scrollTo({y: 0}); }}>
              <Text style={styles.button}>Scroll to top</Text>
            </TouchableOpacity> */}

      </View>
    );
  }
}
