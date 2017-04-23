import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { PricingCard, List, ListItem, Button } from 'react-native-elements';
import { getBalance, depositChanged, deposit } from '../actions';

class Overview extends Component {
  onButtonPress(name) {
    Actions.PoolList(name);
  }
  onDepositPress() {
    Actions.deposit();
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
        <List containerStyle={{marginRight: 15, marginLeft: 15}}>
          <ListItem
          key='1'
          title='No Investments so far'
          subtitle='ownership: 0% Value: 0'
          containerStyle={{
                          borderWidth: 0,
                           }}
          titleStyle={{ color: 'white' }}
          />

        </List>

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
})(Overview);
