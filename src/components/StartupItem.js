import _ from 'lodash';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ListItem } from 'react-native-elements';
import { fetchstartup } from '../actions';


class StartupItem extends Component {
  state = { name: '', desc: '', valuation: 0 };
  componentWillReceiveProps() {
    const { uid } = this.props.startups;
    const X = (this.props.startup.startups[uid]);
    const { name } = X;
    this.setState({ name: <Text>{name}</Text> });
  }
  onButtonPress() {
    Actions.startup();
  }

  render() {
      const name = this.state.name;
      console.log(name);
      return (
          <ListItem
          key='1'
          title="name"
          subtitle={name}
          containerStyle={{ backgroundColor: '#2c3e50',
                            borderColor: '#2c3e50',
                            borderWidth: 0,
                            borderBottomColor: '#2c3e50'
                           }}
          titleStyle={{ color: 'white' }}
          onPress={this.onButtonPress.bind(this)}
          />
      );
  }
}

const mapStateToProps = state => {
  console.log(state);
  const { startup } = state;
  return { startup };
};


export default connect(mapStateToProps, { fetchstartup })(StartupItem);
