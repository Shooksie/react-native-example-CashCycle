import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, ScrollView } from 'react-native';
import { SearchBar, PricingCard } from 'react-native-elements'
import { poolFetch } from '../actions';
import StartupItem from './StartupItem';

class Explore extends Component {
  componentWillMount() {
    this.props.poolFetch();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      this.createDataSource(nextProps);
  }
  createDataSource({ pools }) {
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(pools);
  }
  renderRow(pool) {
    return <StartupItem startup={pool} />;
  }
  render() {
    const balancer = (this.props.balance);
    return (
    <ScrollView style={{ backgroundColor: '#4f9deb', flex: 1 }}>
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
