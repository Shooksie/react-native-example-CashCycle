import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
//import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-elements';
import { Spinner } from '../components/common';
import { startupfetch, fetchstartup } from '../actions';
import StartupItem from '../components/StartupItem';

class PoolList extends Component {
  componentWillMount() {
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
  renderRow(startup) {
    return <StartupItem startups={startup} />;
  }
  renderList() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <ListView
        style={{ borderColor: '#2c3e50' }}
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />);
  }
  render() {
      return (
      <ScrollView
      style={{
              backgroundColor: '#34495e',
              flex: 1,
              borderColor: '#34495e',
              paddingTop: 5
             }}
      >
        <Card
          titleStyle={{ fontSize: 18 }}
          containerStyle={{
                            backgroundColor: '#ecf0f1',
                            flex: 1,
                            borderWidth: 0,
                            padding: 0,
                            paddingTop: 10,
                            borderRadius: 10
                          }}
          dividerStyle={{ marginRight: 5, marginLeft: 5 }}
          title="name"
        >
        {this.renderList()}
        </Card>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  const pools = _.map(state.startups, (val, uid) => {
      return { ...val, uid };
    });
  const { balance } = state.balance;
  const { loading } = state.startup;
    return { pools, balance, loading };
};

export default connect(mapStateToProps, { startupfetch, fetchstartup })(PoolList);
