import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar, Tabs, Tab, Icon, PricingCard } from 'react-native-elements';
import { getBalance, depositChanged, deposit } from '../actions';
import Overview from './overview';
import Account from './account';
import Explore from './explore';

class MainPage extends Component {
  state = { selectedTab: 'overview', value: '' };
  componentWillMount() {
    this.props.getBalance();
  }
   onChanges(value) {
      this.setState({ value });
  }
  changeTab(selectedTab) {
    this.setState({ selectedTab });
  }
  render() {
    const balancer = (this.props.balance);
    const { selectedTab } = this.state;
    return (
        <View style={{ backgroundColor: '#4f9deb', flex: 1 }}>

        <SearchBar
          containerStyle={{ backgroundColor: '#2c3e50', borderColor: '#2c3e50' }}
          round
          value={this.state.value}
          onChangeText={this.onChanges.bind(this)}
          placeholder='Type Here...' />

          <PricingCard
            containerStyle={{
              backgroundColor: '#2c3e50',
              borderRadius: 5,
              borderColor: '#2c3e50',
              marginTop: 20 }}
            priceStyle={{ color: '#95a5a6' }}
            color='#4f9deb'
            title='Current Account'
            price={balancer}
            info={['you currently have']}
            button={{ title: 'INVEST', icon: 'flight-takeoff' }}
          />
        <Tabs>
          <Tab
            titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
            selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
            selected={selectedTab === 'overview'}
            title={selectedTab === 'overview' ? 'overview' : null}
            renderIcon={() =>
               <Icon
               containerStyle={{
                 justifyContent: 'center',
                 alignItems: 'center',
                 marginTop: 12 }}
                 color={'#5e6977'}
                 name='whatshot'
                 size={33}
            />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
            onPress={() => this.changeTab('overview')}>
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
            onPress={() => this.changeTab('explore')}>
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
            />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
            onPress={() => this.changeTab('account')}>
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
   getBalance, depositChanged, deposit
})(MainPage);
