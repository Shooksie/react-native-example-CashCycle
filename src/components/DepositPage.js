import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button, PricingCard } from 'react-native-elements';
import { getBalance, depositChanged, deposit } from '../actions';

class Sliders extends Component {
  onAmountChange(value) {
    this.props.depositChanged(value);
  }
  onDepositPress(){
    const { amount } =  this.props;
    this.props.deposit(amount)
  }
  render() {
    var x = this.props.balance.toString();
  return (
      <ScrollView style={{ backgroundColor: '#4f9deb', flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingLeft: 10,
          paddingRight: 10
        }}
      >
        <View style={{ flex: 1 }}>
          <PricingCard
            containerStyle={{
              backgroundColor: '#2c3e50',
              borderRadius: 5,
              borderColor: '#2c3e50',
              marginTop: 50 }}
            priceStyle={{ color: '#95a5a6' }}
            color='#4f9deb'
            title='Current Account'
            price={x}
            info={['you currently have']}
            button={{ title: 'INVEST', icon: 'flight-takeoff' }}
          />
        </View>
        <View style={{ backgroundColor: 'white', flex: 2, paddingBottom: 20, borderRadius: 5}}>
          <View >
            <FormLabel labelStyle={{ color: 'black'}}>Deposit</FormLabel>
            <FormInput
              placeholder={'$'}
              keyboardType={'numeric'}
              value={this.props.amount}
              onChangeText={this.onAmountChange.bind(this)}
            />
            <Button
              title='Deposit'
              buttonStyle={{ backgroundColor: 'blue' }}
              onPress={this.onDepositPress.bind(this)}
            />
          </View>
          <View >
            <FormLabel labelStyle={{ color: 'black'}}>Withdraw</FormLabel>
            <FormInput placeholder={'$'} keyboardType={'numeric'} />
            <Button title='Withdraw' buttonStyle={{ backgroundColor: 'blue' }} />
          </View>
        </View>
      </View>
      </ScrollView>
   );
 }
}
const mapStateToProps = (state) => {
  const { balance, amount } = state.balance;
  return { balance, amount };
};

export default connect(mapStateToProps, {
   getBalance, depositChanged, deposit
})(Sliders);
