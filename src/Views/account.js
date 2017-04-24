import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { PricingCard, List, ListItem, Button } from 'react-native-elements';
import { getBalance, depositChanged, deposit, withdraws } from '../actions';

class Account extends Component {
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
    const balancer = (this.props.balance);  
  return (
      <ScrollView style={{ flex: 1 }}>
        <PricingCard
          containerStyle={{
            borderRadius: 5,
            marginTop: 20 }}
          priceStyle={{ color: '#95a5a6' }}
          color='#4f9deb'
          title='Current Account'
          price={balancer}
          info={['you currently have']}
          button={{ title: 'Deposit/Withdraw', icon: 'local-atm' }}
          onButtonPress={() => this.onDepositPress()}
        />
      </ScrollView>
   );
 }
}
const mapStateToProps = (state) => {
  const { name, email } = state.auth;
  const { balance } = state.balance;
  return { balance, name, email };
};

export default connect(mapStateToProps, {
   getBalance, depositChanged, deposit, withdraws
})(Account);
