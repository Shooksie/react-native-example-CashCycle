import React, { Component } from 'react';
import { View, Text, LayoutAnimation} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { FormLabel, FormInput, Button, Divider, ListItem } from 'react-native-elements'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import CardList from '../components/cardList';
import stripe from 'tipsi-stripe'
import { getCards, cardChanged, addCard } from '../actions';



class UserProfile extends Component {
  state = {
            name: '',
            email: '',
            error: '',
            type: '',
            add: '',
            valid: false,
            disable: false,
            expanded: false,
            added: false
          };
  componentWillUpdate(){
    LayoutAnimation.linear();
  }
  onChange(form){
    const { expiry, cvc, number, type } = form.values;
    const { valid } = form;
    this.setState({ type, valid });
    this.setState({ error: '', add: '', disable: false, added: false})
    this.props.cardChanged({ number, expiry, cvc })
  }
  onPress() {
    if(this.state.expanded){
      this.setState({ expanded: false});
    }
    else {
      this.setState({ expanded: true});
    }
  }
  renderCard(){
    const { expanded } = this.state;
    if(expanded){
      return (
        <View>
          <FormLabel>Cards</FormLabel>
          <View style={{ marginRight: 20, marginLeft: 20}}>
            <CardList buttonlabel='edit card' />
          </View>
          <FormLabel>CreditCardInput</FormLabel>
          <CreditCardInput onChange={this.onChange.bind(this)} />
          <FormLabel>Name On card</FormLabel>
          <FormInput value={this.state.name}/>
          <Text style={styles.addedTextStyle}>
          {this.state.add}
          </Text>
          <Text style={styles.errorTextStyle}>
          {this.state.error}
          </Text>
          <Button
            disabled={this.state.disable}
            title="Add Card"
            onPress={this.onButtonPress.bind(this)}
            buttonStyle={{ borderRadius: 5, marginTop: 20, marginBottom: 20 }}
            backgroundColor="#4f9deb"
          />
        </View>
        );
    }
    return <View/>
  }
  onButtonPress(){
    const { type } = this.state;
    const { number, expiry, cvc } = this.props;
    if(this.state.valid && !(this.state.added)){
      this.setState({ error: '', disable: false, added: true, add: 'card was succesfully added'});
      this.props.addCard({ cvc, expiry, number, type});
      Actions.overview();

    }
    else{
      if(this.state.added){
        this.setState({ error: 'card already added', disable: true, add: ''});
      }
      else{
        this.setState({ error: 'invalid card type', disable: true});
      }
    }
  }
  render(){
    return(
      <View style={{ marginRight: 20, marginLeft: 20}}>
        <View style={{ marginLeft: 20, marginTop: 20 }} alignItems='center'>
        <Text style={{ fontSize: 25, color: '#4f9deb'}}>Account</Text>
        </View>
        <Divider style={{ backgroundColor: 'black', marginTop: 15}} />
        <ListItem
        rightIcon={{ name: 'chevron-down', type:'entypo', color: '#4f9deb' }}
        key='2'
        title={'Account'}
        />
        <View style={{ marginLeft: 20, marginTop: 20 }} alignItems='center'>
        <Text style={{ fontSize: 25, color: '#4f9deb'}}>Card Section</Text>
        </View>
        <Divider style={{ backgroundColor: 'black', marginTop: 15}} />
        <ListItem
        rightIcon={{ name: 'chevron-down', type:'entypo', color: '#4f9deb' }}
        key='1'
        title={'Card'}
        onPress={() => this.onPress()}
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
  },
  addedTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'green'
  }
};

const mapStateToProps = (state) => {
  const { expiry, number, cvc } = state.card;
  return { expiry, number, cvc };
};
export default connect(mapStateToProps, {
   getCards, addCard, cardChanged
})(UserProfile);
