
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Spinner } from './common';

 class LoginForm extends Component {
   onEmailChange(text) {
     this.props.emailChanged(text);
   }
   onPasswordChange(text) {
     this.props.passwordChanged(text);
   }
   onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
   }
   onSignUpPress() {
    Actions.register();
   }
   renderButton() {
     if (this.props.loading) {
       return <Spinner size="large" />;
     }
     return (<Button
              title="Login In"
              onPress={this.onButtonPress.bind(this)}
              buttonStyle={{ flex: 1, borderRadius: 5, }}
              backgroundColor="green"
            />
            );
   }
   render() {
     return (
       <View style={{ flex: 1 }}>
         <View style={{ flex: 4, alignItems: 'center', marginBottom: 20 }} >
           <Image
             style={{ marginTop: 30, flex: 1, width: 170 }}
             source={require('./img/logo.png')}
           />
         </View>
         <View style={{ flex: 4 }}>
         <Card >
          <CardSection>
          <Input
          label="Email"
          placeholder="email@example.com"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
          />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
          {this.props.error}
          </Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>
          <CardSection>
            <Button
              title="Sign Up"
              onPress={this.onSignUpPress.bind(this)}
              buttonStyle={{ flex: 1, borderRadius: 5 }}
              backgroundColor="blue"
            />
          </CardSection>
         </Card>
       </View>
       </View>
     );
   }
 }
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
