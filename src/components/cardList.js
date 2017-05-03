import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, ScrollView, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { PricingCard } from 'react-native-elements';
import { poolFetch, fetchstartup } from '../actions';
import CardItem from '../components/carditem';

class CardList extends Component {
  state= { buttonlabel: 'Use Card'};
  componentWillMount() {
    this.props.poolFetch();
    this.props.fetchstartup();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
      this.createDataSource(nextProps);
  }
  createDataSource({ cards, buttonlabel }) {
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(cards);
  }
  renderRow(card) {
    return <CardItem buttonlabel={card.buttonlabel} card={card}/>;
  }
  onDepositPress() {
    Actions.deposit();
  }
  render() {
    console.log(this.props);
    return (
    <ScrollView style={{
      height: 150,
      borderWidth: 1,
      borderColor: '#e1e8ee',
      ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        elevation: 1,
      },
    }),
    }}>
    <ListView
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={this.renderRow}
    />
    </ScrollView>
  );
  }
}
const mapStateToProps = state => {
  const cards = _.map(state.card.cards, (val, uid) => {
      const buttonlabel= state.card.buttonlabel;
      return { ...val, uid, buttonlabel };
    });
    console.log(cards);
  return { cards };
};


export default connect(mapStateToProps, { poolFetch, fetchstartup })(CardList);
