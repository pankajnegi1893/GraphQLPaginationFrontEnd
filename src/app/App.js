/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import { HeaderItem } from '../components/common/HeaderItem/HeaderItem';
import { Container, Tab, Tabs} from 'native-base';
import Booking from '../components/pages/Booking/Booking'

export default class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Container>
          <HeaderItem titleText='BOOKINGS'/>
          <Tabs tabBarUnderlineStyle={{backgroundColor:'#f5f5f5'}}>
                <Tab  
                      heading="UPCOMING" 
                      tabStyle={styles.tabStyle} 
                      textStyle={styles.textStyle} 
                      activeTabStyle={styles.tabStyle} 
                      activeTextStyle={styles.activeTabStyle}>
                  <Booking />
                </Tab>
                <Tab  heading="HISTORY" 
                      tabStyle={styles.tabStyle} 
                      textStyle={styles.textStyle} 
                      activeTabStyle={styles.tabStyle} 
                      activeTextStyle={styles.activeTabStyle}>
                  <Booking/>
                </Tab>
          </Tabs>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: '#ffffff'
  },

  textStyle: {
    color: '#000000'
  },
  activeTabStyle: {
    color: '#000000',
    fontWeight: 'normal'
  }
  
});
