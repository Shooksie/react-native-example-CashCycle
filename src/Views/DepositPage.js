import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { FormLabel, FormInput, Button, PricingCard } from 'react-native-elements';
import { getBalance, depositChanged, deposit, withdraws } from '../actions';
import CardList from '../components/cardList';
import Icons from '../icons';

class Sliders extends Component {
  state = { error: "", disable: false, error1: "" }
  componentWillUpdate(){
    this.props.getBalance();
  }
  onAmountChange(value) {
    if(Number(value.value) > Number(this.props.balance) && value.prop === 'withdraw'){
      this.setState({
        error: "Cannot withdraw more than current balance",
        disable: true
      });
    }
    else {
      this.setState({
        error: "",
        error1: "",
        disable: false
      });
      this.props.depositChanged(value);
    }
  }
  onDepositPress() {
    const { amount, balance, valid } = this.props;
    if(valid){
      this.props.deposit({ amount, balance });
    }
    else{
      this.setState({ error1: "Need to select a card!! to deposit from"});
    }
  }
  onWithdrawPress() {
    const { withdraw, balance, valid } = this.props;
    if(valid){
      this.props.withdraws({ withdraw, balance });
    }
    else{
        this.setState({ error: "Need to select a card!! to withdraw from"});
    }
  }
  render() {
    const x = this.props.amount;
    const y = this.props.withdraw;
    const buttonlabel='Use Card'
  return (
      <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 1 }}>
          <PricingCard
            containerStyle={{
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
            flex: 2,
            paddingBottom: 20,
            borderRadius: 5,
            marginRight: 15,
            marginLeft: 15 }}
        >
          <View style={{ marginRight: 20, marginLeft: 20}}>
              <CardList buttonlabel={buttonlabel} />
          </View>
          <View style={{ marginRight: 5, marginLeft: 5}}>

            <FormLabel labelStyle={{ color: '#4f9deb' }}>Deposit</FormLabel>
            <FormInput
              placeholder={'$'}
              keyboardType={'numeric'}
              value={x}
              onChangeText={value => this.onAmountChange({ prop: 'amount', value })}
            />
            <Text style={styles.errorTextStyle}>
            {this.state.error1}
            </Text>
            <Button
              title='DEPOSIT'
              buttonStyle={{ backgroundColor: '#4f9deb' }}
              onPress={this.onDepositPress.bind(this)}
            />
          </View>
          <View style={{ marginRight: 5, marginLeft: 5}}>
            <FormLabel labelStyle={{ color: '#4f9deb' }} >Withdraw</FormLabel>
            <FormInput
              placeholder={'$'}
              keyboardType={'numeric'}
              value={y}
              onChangeText={value => this.onAmountChange({ prop: 'withdraw', value })}
            />
            <Text style={styles.errorTextStyle}>
            {this.state.error}
            </Text>
            <Button
              title='WITHDRAW'
              disabled={this.state.disable}
              buttonStyle={{ backgroundColor: '#4f9deb'}}
              onPress={this.onWithdrawPress.bind(this)}
            />
          </View>
        </View>
      </View>
      </ScrollView>
   );
 }
}
const styles = {
  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'red'
  }
};
const mapStateToProps = (state) => {
  const { balance, amount, withdraw, valid } = state.balance;
  return { balance, amount, withdraw, valid };
};

export default connect(mapStateToProps, {
   getBalance, depositChanged, deposit, withdraws
})(Sliders);
