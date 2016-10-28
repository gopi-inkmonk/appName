import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import styles from '../styles/style.js';

export default class FeedCard extends React.Component {
  render() {
    return (
      <TouchableHighlight style={styles.feedThumpContainer}>
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
    )
  }
}
