import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, ScrollView } from 'react-native';
import { PricingCard } from 'react-native-elements';
import { poolFetch } from '../actions';
import PoolItem from '../components/PoolItem';

class Explore extends Component {
  componentWillMount() {
    this.props.poolFetch();
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
    console.log(this.pool);
    return <PoolItem pool={pool} />;
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
        marginTop: 20 }}
      priceStyle={{ color: '#95a5a6' }}
      color='#4f9deb'
      title='Current Account'
      price={balancer}
      info={['you currently have']}
      button={{ title: 'INVEST', icon: 'flight-takeoff' }}
    />
    <ListView
      style={{ borderColor: '#2c3e50' }}
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={this.renderRow}
    />
  </ScrollView>
  );
  }
}
const mapStateToProps = state => {
  const pools = _.map(state.pools, (val, uid) => {
      return { ...val, uid };
    });
  const { balance } = state.balance;
    return { pools, balance };
};


export default connect(mapStateToProps, { poolFetch })(Explore);
