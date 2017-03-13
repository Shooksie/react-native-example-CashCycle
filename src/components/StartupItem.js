import React, { Component } from 'react';
import { Text, View } from 'react-native';
//import { Actions } from 'react-native-router-flux';
import { Card, Button } from 'react-native-elements';

class StartupItem extends Component {
  render() {
    const { name, desc } = this.props;
      return (
          <Card
            imageStyle={{ borderWidth: 0 }}
            containerStyle={{
                              backgroundColor: '#ecf0f1',
                              borderWidth: 0,
                              borderColor: '#ecf0f1',
                              borderBottomWidth: 0,
                              borderBottomColor: '#ecf0f1',
                              margin: 0,
                            }}
            title={name}
            image={require('./img/Upstart.png')}
          >
          <View style={{ marginBottom: 10 }}>
            <Text>
             {desc}
            </Text>
          </View>
            <Button
             icon={{ name: 'code' }}
             backgroundColor='#03A9F4'
             fontFamily='Lato'
             buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10 }}
             title='More Info'
            />
          </Card>
      );
  }
}

export default StartupItem;
