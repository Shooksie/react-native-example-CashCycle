
import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { PricingCard, List, ListItem, Button } from 'react-native-elements';
import { getBalance, depositChanged, deposit, getCards, setLabel } from '../actions';
import UserPoolItem from '../components/UserPoolItem';

class Overview extends Component {
  componentWillMount(){
    this.props.getCards();
    this.props.getBalance();
  }
  onButtonPress(name) {
    Actions.PoolList(name);
  }
  onDepositPress() {
    this.props.setLabel('Use Card');
    Actions.deposit();
  }
  createDataSource({ pools }) {
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(pools);
  }
  renderRow(pool) {
    return <UserPoolItem pool={pool} />;
  }
  renderInvestments(){
    const { Investment } = this.props.UserInvest;
    if(Investment){
      this.createDataSource(this.props);
      return (
      <ListView
        style={{ borderColor: '#2c3e50', marginRight: 10, marginLeft: 10 }}
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />);
    }else{
      return(
        <List containerStyle={{marginRight: 15, marginLeft: 15}}>
          <ListItem
          key='1'
          title='No Investments so far'
          subtitle='ownership: 0% Value: 0'
          containerStyle={{
                          borderWidth: 0,
                           }}
          />

        </List>
      )
    }
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

    {this.renderInvestments()}
    </ScrollView>
  );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  const { balance, amount } = state.balance;
  console.log(balance);
  const { UserInvest } = state;
  if(UserInvest.Investment){
    const pools = _.map(UserInvest.InvestmentsList, (val, uid) => {
       return { ...val, uid };
     });
     return { balance, amount, pools, UserInvest };
  }
  else{
    return { balance, amount, UserInvest};
  }
};

export default connect(mapStateToProps, {
   getBalance, depositChanged, deposit, getCards, setLabel
})(Overview);
