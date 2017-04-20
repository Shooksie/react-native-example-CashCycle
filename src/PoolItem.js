import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class PoolItem extends Component {
  getInitialState() {
   return {
     progress: 0
   };
 },
  render() {
    return (
      <View style={{ height: 80 }}>
          <View> </View>
          <View style={{ flexDirection: 'coloumn' }}>
            <Text>Goal: </Text>
          </View>
      </View>
    );
  }
}
