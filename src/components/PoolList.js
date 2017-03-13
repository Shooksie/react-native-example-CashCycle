import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//import { Actions } from 'react-native-router-flux';
import { Card } from 'react-native-elements';
import StartupItem from './StartupItem';

class PoolList extends Component {
  render() {
      const { name } = this.props;
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
          title={name}
        >
        <StartupItem
          name={'Upstart'}
          desc={'Upstart is a financial service start up that aims to help people save'}
        />
        <StartupItem
          name={'Acorns'}
          desc={'Upstart is a financial service start up that aims to help people save'}
        />
        <StartupItem
          name={'Stash'}
          desc={'Upstart is a financial service start up that aims to help people save'}
        />
        </Card>
      </ScrollView>
    );
  }
}

export default PoolList;
