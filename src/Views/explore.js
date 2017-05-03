import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { PricingCard } from 'react-native-elements';
import { poolFetch, fetchstartup, setLabel, getBalance } from '../actions';
import PoolItem from '../components/PoolItem';

class Explore extends Component {
  componentWillMount() {
    this.props.getBalance();
    this.props.poolFetch();
    this.props.fetchstartup();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
      this.createDataSource(nextProps);
  }
  createDataSource({ pools }) {
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(pools);
  }
  renderRow(pool) {
    return <PoolItem pool={pool} />;
  }
  onDepositPress() {
    this.props.setLabel('Use Card');
    Actions.deposit();
  }
  render() {
    const balancer = (this.props.balance);
    return (
    <ScrollView style={{flex: 1 }}>
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
    <ListView
      style={{ marginLeft: 15, marginRight: 15}}
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={this.renderRow}
    />
  </ScrollView>
  );
  }
}
const mapStateToProps = state => {
  console.log(state);
  const pools = _.map(state.pools.pool, (val, uid) => {
      return { ...val, uid };
    });
  const { balance } = state.balance;
    return { pools, balance };
};


export default connect(mapStateToProps, {
  poolFetch, fetchstartup, setLabel, getBalance
 })(Explore);
