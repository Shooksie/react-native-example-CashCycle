import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar, Tabs, Tab, Icon } from 'react-native-elements';
import { getBalance, depositChanged, deposit, fetchInvestments, poolFetch, fetchstartup } from './actions';
import Overview from './Views/overview';
import Account from './Views/account';
import Explore from './Views/explore';

class MainPage extends Component {
  state = { selectedTab: 'home', value: '' };
  componentWillMount() {
    this.props.poolFetch();
    this.props.getBalance();
    this.props.fetchstartup();
    this.props.fetchInvestments();
  }
  componentWillUpdate(){
    this.props.getBalance();
  }
   onChanges(value) {
      this.setState({ value });
  }
  changeTab(selectedTab) {
    this.setState({ selectedTab });
  }
  render() {
    const { selectedTab } = this.state;
    return (
        <View style={{ flex: 1 }}>

        <SearchBar
          containerStyle={{ borderColor: '#2c3e50', marginTop: 20 }}
          round
          lightTheme
          value={this.state.value}
          onChangeText={this.onChanges.bind(this)}
          placeholder='Type Here...'
        />

        <Tabs>
          <Tab
            titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
            selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
            selected={selectedTab === 'home'}
            title={selectedTab === 'home' ? 'home' : null}
            renderIcon={() =>
               <Icon
                   containerStyle={{
                     justifyContent: 'center',
                     alignItems: 'center',
                     marginTop: 12 }}
                     color={'#5e6977'}
                     name='home'
                     size={33}
              />
              }
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='home' size={30} />}
            onPress={() => this.changeTab('home')}
          >
          <Overview />
          </Tab>
          <Tab
            titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
            selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
            selected={selectedTab === 'explore'}
            title={selectedTab === 'explore' ? 'explore' : null}
            renderIcon={() =>
               <Icon
               containerStyle={{
                 justifyContent: 'center',
                 alignItems: 'center',
                 marginTop: 12 }}
                 color={'#5e6977'}
                 name='explore'
                 size={33}
            />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='explore' size={30} />}
            onPress={() => this.changeTab('explore')}
          >
            <Explore />
          </Tab>
          <Tab
            titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
            selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
            selected={selectedTab === 'account'}
            title={selectedTab === 'account' ? 'account' : null}
            renderIcon={() =>
               <Icon
               containerStyle={{
                 justifyContent: 'center',
                 alignItems: 'center',
                 marginTop: 12 }}
                 color={'#5e6977'}
                 name='person'
                 size={33}
              />
            }
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
            onPress={() => this.changeTab('account')}
          >
            <Account />
          </Tab>

        </Tabs>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  const { balance, amount } = state.balance;
  return { balance, amount };
};

export default connect(mapStateToProps, {
   getBalance, depositChanged, deposit, fetchInvestments, poolFetch, fetchstartup
})(MainPage);
