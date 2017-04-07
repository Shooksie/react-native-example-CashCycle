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
        <PricingCard
          containerStyle={{
            backgroundColor: '#2c3e50',
            borderRadius: 5,
            borderColor: '#2c3e50',
            marginTop: 50 }}
          priceStyle={{ color: '#95a5a6' }}
          color='#4f9deb'
          title='Current Account'
          price={balancer}
          info={['you currently have']}
          button={{ title: 'INVEST', icon: 'flight-takeoff' }}
        />
        <Button
          onPress={() => this.onDepositPress()}
          borderRadius={5}
          title="Deposit"
          backgroundColor="#27ae60"
        />
        <List containerStyle={{ backgroundColor: '#2c3e50', borderColor: '#2c3e50' }}>
          <ListItem
          key='1'
          title='Tech pool'
          subtitle='ownership: 20% Value: 32,000'
          containerStyle={{ backgroundColor: '#2c3e50',
                            borderColor: '#2c3e50',
                            borderWidth: 0,
                            borderBottomColor: '#2c3e50'
                           }}
          titleStyle={{ color: 'white' }}
          />
          <ListItem
          key='2'
          title='Resturant pool'
          subtitle='ownership: 10% Value: 15,000'
          containerStyle={{ backgroundColor: '#2c3e50',
                            borderColor: '#2c3e50',
                            borderWidth: 0,
                            borderBottomColor: '#2c3e50'
                           }}
          titleStyle={{ color: 'white' }}
          />
          <ListItem
          key='3'
          title='Social pool'
          subtitle='ownership: 20% Value: 32,000'
          containerStyle={{ backgroundColor: '#2c3e50',
                            borderColor: '#2c3e50',
                            borderWidth: 0,
                            borderBottomColor: '#2c3e50'
                           }}
          titleStyle={{ color: 'white' }}
          onPress={() => this.onButtonPress()}
          />
          <ListItem
          key='4'
          title='Reader pool'
          subtitle='ownership: 10% Value: 15,000'
          containerStyle={{ backgroundColor: '#2c3e50',
                            borderColor: '#2c3e50',
                            borderWidth: 0,
                            borderBottomColor: '#2c3e50'
                           }}
          titleStyle={{ color: 'white' }}
          />
          <ListItem
          key='5'
          title='Research pool'
          subtitle='ownership: 5% Value: 16,000'
          containerStyle={{ backgroundColor: '#2c3e50',
                            borderColor: '#2c3e50',
                            borderWidth: 0,
                            borderBottomColor: '#2c3e50'
                           }}
          titleStyle={{ color: 'white' }}
          />
          <ListItem
          key='6'
          title='Resturant pool'
          subtitle='ownership: 10% Value: 15,000'
          containerStyle={{ backgroundColor: '#2c3e50',
                            borderColor: '#2c3e50',
                            borderWidth: 0,
                            borderBottomColor: '#2c3e50'
                           }}
          titleStyle={{ color: 'white' }}
          />
          <ListItem
          key='7'
          title='Computer Pool'
          subtitle='ownership: 20% Value: 32,000'
          containerStyle={{ backgroundColor: '#2c3e50',
                            borderColor: '#2c3e50',
                            borderWidth: 0,
                            borderBottomColor: '#2c3e50'
                           }}
          titleStyle={{ color: 'white' }}
          />
          <ListItem
          key='8'
          title='Retail pool'
          subtitle='ownership: 10% Value: 15,000'
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
