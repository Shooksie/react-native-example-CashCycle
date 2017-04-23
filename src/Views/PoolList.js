
import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, ScrollView, View} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, Button, Text, FormLabel, FormInput, } from 'react-native-elements';
import { Spinner, CardSection } from '../components/common';
import { startupfetch, fetchstartup, investmentChanged, invest } from '../actions';
import StartupItem from '../components/StartupItem';


class PoolList extends Component {
  componentWillMount(){
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
      this.createDataSource(nextProps);
  }
  createDataSource({ pools }) {
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(pools);
  }
  renderRow(startup) {
    return <StartupItem startups={startup} />;
  }
  onButtonPress() {
   const { amount, pools, balance } = this.props;
   const { goal, current, uid, startups, category } = this.props.poolInfo;

   this.props.invest({ startups, amount, current, goal, uid, category, balance });
   Actions.overview();
  }
  onAmountChange(value) {
    this.props.investmentChanged(value);
  }
  renderList() {
   if (this.props.loading) {
     return <Spinner size="large" />;
   }

   return (
     <ListView
       style={{ borderColor: '#2c3e50', marginRight: 10, marginLeft: 10 }}
       enableEmptySections
       dataSource={this.dataSource}
       renderRow={this.renderRow}
     />);
 }
  render() {
      console.log(this.props);
      const { category, goal, current} = this.props.poolInfo;
      const x = this.props.amount;
      const Current = ' Current: '
      return (
      <ScrollView
      style={{
              flex: 1,
              borderColor: '#34495e',
              paddingTop: 20
             }}
      >
        <Card
          titleStyle={{ fontSize: 18 }}
          containerStyle={{
                            backgroundColor: '#ecf0f1',
                            paddingRight: 5,
                            paddingLeft: 5,
                            paddingBottom: 20,
                            marginTop: 100,
                            borderRadius: 10,
                            opacity: 0.6
                          }}
          dividerStyle={{ marginRight: 5, marginLeft: 5 }}
          title={category}
        >
          <View style={{ backgroundColor: '#ecf0f1', marginLeft: 5, marginRight: 5 }}>
            <View style={{backgroundColor: '#ecf0f1', flexDirection: 'row',  justifyContent: 'space-between',
        alignItems: 'center', marginRight: 20, marginLeft: 15}}>
                <Text style={{ color: '#0076FF'}} h5 >
                  {Current}
                  <Text style={{ color: 'black'}}>{current}</Text>
                </Text>
                <Text style={{ color: '#0076FF'}} h5 >
                  Goal: <Text style={{ color: 'black'}}>{goal}</Text>
                </Text>

            </View>
            <FormLabel labelStyle={{ color: '#4f9deb' }}>Amount</FormLabel>
            <FormInput
              placeholder={'$'}
              keyboardType={'numeric'}
              value={x}
              onChangeText={this.onAmountChange.bind(this)}
            />
            <Button
              borderRadius={5}
              title="Invest"
              backgroundColor="#27ae60"
              buttonStyle={{borderRadius: 0, marginLeft: 20, marginRight: 20, marginBottom: 0, marginTop: 20}}
              onPress={() => this.onButtonPress()}
            />
          </View>
          {this.renderList()}
        </Card>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const pools = _.map(state.startups.startups, (val, uid) => {
     return { ...val, uid };
   });
   console.log(state);
 const { amount } = state.investment;
 console.log(amount);
 const { balance } = state.balance;
 const { loading } = state.startup;
 const { poolInfo } = state.pools
   return { pools, balance, loading, poolInfo, amount };
};

export default connect(mapStateToProps, { startupfetch, fetchstartup, investmentChanged, invest })(PoolList);
