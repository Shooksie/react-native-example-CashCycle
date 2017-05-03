import React, { Component } from 'react';
import { Text, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ListItem, FormLabel, FormInput, Button, Icon } from 'react-native-elements';
import { poolstartup, poolInfo, validate} from '../actions';
import { CardSection, Input } from '../components/common';
import Icons from '../icons';


class CardItem extends Component {
  state = { expanded: false, CVC1: '', valid: false, error: '' };
  componentWillUpdate(){
    LayoutAnimation.easeInEaseOut();
  }
  onChange(value){
    this.setState({ CVC1: value, error: '' });
    console.log(this.state.CVC1);
  }
  onPress (){
    const { buttonlabel, card } = this.props;
    const { valid } = this.state;
    if(this.state.CVC1 === card.cvc){
      this.setState({ valid: true});
      this.props.validate(true);
    }
    else{
      this.setState({ valid: false, error: 'invalid CVC/CVN', CVC1: ''});
      this.props.validate(false);
    }
  }
  onTextPress(){
    this.setState({ CVC1: '', expanded: false, valid: false })
  }
  onButtonPress() {
    if(this.state.expanded){
      this.setState({ expanded: false});
    }
    else {
      this.setState({ expanded: true});
    }
  }
  renderValid(){
    if(this.state.valid){
      return(
        <View style={{
          flex: 1,
          alignItems: 'flex-end',
          flexDirection: 'row'
        }}>
        <View style={{ flex: 1, paddingLeft: 30}}>
          <Text  style={{color: '#4f9deb'}} onPress={this.onTextPress.bind(this)}>
            different card?
          </Text>
        </View>
        <View  style={{ flex: 1}}>
          <Icon
            name='check-circle'
            type='font-awesome'
            color='#27ae60'
          />
        </View>
      </View>
      );
    }
    else{
      const { buttonlabel } = this.props;
      return(
        <View style={{ flex: 1}}>
          <View style={{
            flex: 1,
            alignItems: 'flex-end',
            flexDirection: 'row'
          }}>
              <View style={{ flex: 1 }}>
                <Button
                  small
                  title={buttonlabel}
                  buttonStyle={{ backgroundColor: '#4f9deb' }}
                  onPress={this.onPress.bind(this)}
                />
              </View>
              <View style={{ flex: 1 }}>
                <FormLabel labelStyle={{ color: 'black' }}>CVC/CCV</FormLabel>
                <FormInput
                  placeholder={'CVC'}
                  keyboardType={'numeric'}
                  value={this.state.CVC1}
                  onChangeText={value => this.onChange(value)}
                />
              </View>
          </View>
        <View style={{ flex: 1}}>
          <Text style={styles.errorTextStyle}>
          {this.state.error}
          </Text>
        </View>
      </View>
      );
    }
  }
  renderCard(){

    const { expanded } = this.state;
    if(expanded){
      return (
        <CardSection>
          {this.renderValid()}
        </CardSection>
        );
    }
    return <View/>
  }
  render() {
    const { number, type } = this.props.card;
    const hidden = '**** **** **** '.concat(number.substr(-4))
      return (
        <View>
          <ListItem
          rightIcon={{ name: 'chevron-down', type:'entypo', color: '#4f9deb' }}
          key='1'
          title={hidden}
          onPress={() => this.onButtonPress()}
          avatar={Icons[type]}
          />
          {this.renderCard()}
        </View>
      );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  const { name } = state.auth;
  return { name };
};


export default connect(mapStateToProps, { poolstartup, poolInfo, validate })(CardItem);
