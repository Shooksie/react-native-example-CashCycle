import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button, PricingCard } from 'react-native-elements';
import { getBalance, depositChanged, deposit, withdraws } from '../actions';

class Sliders extends Component {
  onAmountChange(value) {
    this.props.depositChanged(value);
  }
  onDepositPress() {
    const { amount, balance } = this.props;
    this.props.deposit({ amount, balance });
  }
  onWithdrawPress() {
    const { withdraw, balance } = this.props;
    this.props.withdraws({ withdraw, balance });
  }
  render() {
    const x = this.props.amount;
    const y = this.props.withdraw;
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
            price={this.props.balance}
            info={['you currently have']}
            button={{ title: 'INVEST', icon: 'flight-takeoff' }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#2c3e50',
            flex: 2,
            paddingBottom: 20,
            borderRadius: 5,
            marginRight: 15,
            marginLeft: 15 }}
        >
          <View style={{ marginRight: 15, marginLeft: 15 }}>
            <FormLabel labelStyle={{ color: '#4f9deb' }}>Deposit</FormLabel>
            <FormInput
              placeholder={'$'}
              keyboardType={'numeric'}
              value={x}
              inputStyle={{ color: 'white' }}
              onChangeText={value => this.props.depositChanged({ prop: 'amount', value })}
            />
            <Button
              title='DEPOSIT'
              buttonStyle={{ backgroundColor: '#4f9deb' }}
              onPress={this.onDepositPress.bind(this)}
            />
          </View>
          <View >
            <FormLabel labelStyle={{ color: '#4f9deb' }} >Withdraw</FormLabel>
            <FormInput
              placeholder={'$'}
              keyboardType={'numeric'}
              value={y}
              onChangeText={value => this.props.depositChanged({ prop: 'withdraw', value })}
            />
            <Button
              title='WITHDRAW'
              buttonStyle={{ backgroundColor: '#4f9deb', marginRight: 30, marginLeft: 30 }}
              onPress={this.onWithdrawPress.bind(this)}
           />
          </View>
        </View>
      </View>
      </ScrollView>
   );
 }
}
const mapStateToProps = (state) => {
  const { balance, amount, withdraw } = state.balance;
  return { balance, amount, withdraw };
};

export default connect(mapStateToProps, {
   getBalance, depositChanged, deposit, withdraws
})(Sliders);
