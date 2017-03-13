import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FormLabel, FormInput, Button } from 'react-native-elements';


class LoginForm extends Component {
  onButtonPress() {
    Actions.overview();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 2, alignItems: 'center', marginBottom: 20 }} >
          <Image
            style={{ marginTop: 30, flex: 1, width: 170 }}
            source={require('./img/logo.png')}
          />
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ paddingBottom: 20 }}>
            <FormLabel>User/Email</FormLabel>
            <FormInput />
            <FormLabel>Passowrd</FormLabel>
            <FormInput secureTextEntry />
          </View>
          <View style={{ paddingBottom: 10 }}>
            <Button
            onPress={() => this.onButtonPress()}
            borderRadius={5}
            icon={{ name: 'lock' }}
            title="Sign In"
            backgroundColor="#27ae60"
            />
          </View>
          <View >
            <Button
            borderRadius={5}
            icon={{ name: 'person' }}
            title="Sign Up"
            backgroundColor="#03A9F4"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default LoginForm;
