import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ListItem } from 'react-native-elements';
import { poolstartup, poolInfo } from '../actions';


class PoolItem extends Component {
  state = { category: " "}
  componentWillMount(){
    const { uid } = this.props.pool;
    const { category } = this.props.pools.pool[uid]
    this.setState({ category })

  }
  onButtonPress() {
    const { uid } = this.props.pool;
    const poollist = this.props.pools.pool[uid]
    this.props.poolInfo(poollist);
    this.props.poolstartup(poollist.startups);
    Actions.PoolList();
  }
  render() {
    const { amount, ownership, uid } = this.props.pool;
    const poolitem = this.props.pools.pool[uid];
    const subtitle = 'Amount: '.concat(amount, ' ownership:', ownership);
      return (
          <ListItem
          key='1'
          title={this.state.category}
          subtitle={subtitle}
          rightIcon={{color: '#4f9deb' }}
          onPress={() => this.onButtonPress()}
          />
      );
  }
}

const mapStateToProps = state => {
  const { pools } = state;
  return { pools };
};


export default connect(mapStateToProps, { poolstartup, poolInfo })(PoolItem);
