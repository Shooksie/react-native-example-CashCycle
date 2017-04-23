import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import { emailChanged, passwordChanged, nameChanged, createUser } from '../actions';
import { Card, CardSection, Input, Spinner } from '../components/common';

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
     return (
       <Button
          title="Sign Up"
          onPress={this.onButtonPress.bind(this)}
          buttonStyle={{ borderRadius: 5 }}
          backgroundColor="#4f9deb"
       />
            );
   }
   render() {
     return (
       <View style={{ flex: 1 }}>
         <View style={{ flex: 4, alignItems: 'center', marginBottom: 20 }} >
           <Image
             style={{ marginTop: 30, flex: 1, width: 170 }}
             source={require('../img/logo.png')}
           />
         </View>
      <View style={{ flex: 4 }}>
       <Card style={{flex: 1, marginTop: 30}}>
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
        <View>
          {this.renderButton()}
        </View>
        <CardSection>
          <Text>Already have account?</Text>
        </CardSection>
        <View>
          <Button
          title="Login"
          onPress={this.onLoginPress.bind(this)}
          buttonStyle={{ borderRadius: 5, }}
          backgroundColor="#27ae60"
          />
        </View>
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
  const { email, name, password, error, loading, account } = auth;
  return { email, name, password, error, loading, account };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, createUser, nameChanged
})(SignUp);
