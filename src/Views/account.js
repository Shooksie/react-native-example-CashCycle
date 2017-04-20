import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
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
  return (
      <ScrollView style={{ backgroundColor: '#4f9deb', flex: 1 }}>
          <Text>Hello World</Text>
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
