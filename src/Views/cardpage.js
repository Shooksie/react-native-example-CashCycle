
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

export default class CardFormScreen extends Component {

  render() {
    return (
      <View>
      <CreditCardInput />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instruction: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  token: {
    height: 20,
  },
})
