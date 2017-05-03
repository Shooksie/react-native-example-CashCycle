import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ListItem } from 'react-native-elements';
import { fetchstartup } from '../actions';
import { CardSection } from '../components/common';

class StartupItem extends Component {
  state = { name: '', desc: '', valuation: 0, expanded: false };
  componentWillUpdate(){
    LayoutAnimation.easeInEaseOut();
  }
  componentWillMount() {
    const { uid } = this.props.startups;
    const X = (this.props.startup.startups[uid]);
    const { name, valuation, Description } = X;
    this.setState({ name: name, valuation: valuation, desc: Description});
  }
  onButtonPress() {
    if(this.state.expanded){
      this.setState({ expanded: false});
    }
    else {
      this.setState({ expanded: true});
    }
  }
  renderDesc(desc){
    const { expanded } = this.state;
    if(expanded){
      return (
        <CardSection style={{   backgroundColor: '#ecf0f1', marginRight: 15, marginLeft: 20, borderColor: 'grey', borderWidth: 0.5, borderRadius: 5  }}>
          <Text style={{ flex: 1}}>
            {desc}
          </Text>
        </CardSection>
        );
    }
    return <View/>
  }

  render() {
      const {name, valuation, desc } = this.state
      const value = valuation.toString();
      return (
        <View>
          <ListItem
            key='1'
            title={name}
            subtitle={
              <View style={{ paddingLeft: 10}}>
                <Text>Valuation: {value}</Text>
              </View>
            }
            rightIcon={{ name: 'chevron-down', type:'entypo', color: '#4f9deb' }}
            onPress={this.onButtonPress.bind(this)}
          />
          {this.renderDesc(desc)}
        </View>
      );
  }
}

const mapStateToProps = state => {
  const { startup } = state;
  return { startup };
};


export default connect(mapStateToProps, { fetchstartup })(StartupItem);
