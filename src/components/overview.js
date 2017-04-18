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
    <ScrollView style={{ backgroundColor: '#4f9deb', flex: 1 }}>
        <Button
          onPress={() => this.onDepositPress()}
          borderRadius={5}
          title="Deposit/Withdraw"
          backgroundColor="#27ae60"
        />
        <List containerStyle={{ backgroundColor: '#2c3e50', borderColor: '#2c3e50' }}>
          <ListItem
          key='1'
          title='No Investments so far'
          subtitle='ownership: 0% Value: 0'
          containerStyle={{ backgroundColor: '#2c3e50',
                            borderColor: '#2c3e50',
                            borderWidth: 0,
                            borderBottomColor: '#2c3e50'
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
