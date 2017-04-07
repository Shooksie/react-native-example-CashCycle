import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import { emailChanged, passwordChanged, nameChanged, createUser } from '../actions';
import { Card, CardSection, Input, Spinner } from './common';

 class SignUp extends Component {
   onEmailChange(text) {
     this.props.emailChanged(text);
   }
   onNameChange(text) {
     this.props.nameChanged(text);
   }
   onPasswordChange(text) {
     this.props.passwordChanged(text);
   }
   onButtonPress() {
    const { email, password, name, account } = this.props;
    this.props.createUser({ email, password, name, account });
   }
   onLoginPress() {
     Actions.login();
   }
   renderButton() {
     if (this.props.loading) {
       return <Spinner size="large" />;
     }
     return (<Button
              title="Sign Up"
              onPress={this.onButtonPress.bind(this)}
              buttonStyle={{ flex: 1, borderRadius: 5 }}
              backgroundColor="blue"
             />);
   }
   render() {
     return (
       <Card>
       <CardSection>
         <Input
         label="Name"
         placeholder="JOHN"
         onChangeText={this.onNameChange.bind(this)}
         value={this.props.name}
         />
       </CardSection>
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
          <Text>Already have account?</Text>
        </CardSection>
        <CardSection>
          <Button
          title="Login"
          onPress={this.onLoginPress.bind(this)}
          buttonStyle={{ flex: 1, borderRadius: 5, }}
          backgroundColor="green" />
        </CardSection>
       </Card>
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
  const { email, name, password, error, loading, account } = auth;
  return { email, name, password, error, loading, account };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, createUser, nameChanged
})(SignUp);
