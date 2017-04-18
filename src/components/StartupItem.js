import React, { Component } from 'react';
import { Text, View,} from 'react-native';
//import { Actions } from 'react-native-router-flux';
import { Card, Button, ListItem } from 'react-native-elements';

class StartupItem extends Component {
  render() {
    console.log(this.props);
    const { category, goal, current } = this.props.startup;
    const subtitle = 'Goal: '.concat(goal, ' Current:', current);
      return (
          <ListItem
          key='1'
          title={category}
          subtitle={subtitle}
          containerStyle={{ backgroundColor: '#2c3e50',
                            borderColor: '#2c3e50',
                            borderWidth: 0,
                            borderBottomColor: '#2c3e50'
                           }}
          titleStyle={{ color: 'white' }}
          />
      );
  }
}

export default StartupItem;
