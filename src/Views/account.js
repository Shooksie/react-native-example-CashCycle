import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { PricingCard, List, ListItem, Button } from 'react-native-elements';
import { getBalance, depositChanged, deposit, withdraws, setLabel } from '../actions';
import UserProfile from './AccountPage';
class Account extends Component {
  componentWillMount(){
    this.props.setLabel('Edit Card');
  }
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
        <UserProfile />
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
   getBalance, depositChanged, deposit, withdraws, setLabel 
})(Account);
