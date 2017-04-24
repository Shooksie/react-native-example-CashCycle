import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ListItem } from 'react-native-elements';
import { poolstartup, poolInfo } from '../actions';


class PoolItem extends Component {
  onButtonPress(uid) {
    this.props.poolInfo(this.props.pool);
    this.props.poolstartup(uid.startups);
    Actions.PoolList();
  }
  render() {
    const { category, goal, current, uid } = this.props.pool;
    const subtitle = 'Goal: '.concat(goal, ' Current:', current);
      return (
          <ListItem
          key='1'
          title={category}
          subtitle={subtitle}
          containerStyle={{
                           }}
          onPress={() => this.onButtonPress(this.props.pool)}
          />
      );
  }
}

const mapStateToProps = state => {
  const { name } = state.auth;
  return { name };
};


export default connect(mapStateToProps, { poolstartup, poolInfo })(PoolItem);
