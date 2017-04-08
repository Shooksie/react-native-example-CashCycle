import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBm_s1tIOLX8po3TkkW7YhPIDvLqizuJ88',
      authDomain: 'cashcycle-e4ee8.firebaseapp.com',
      databaseURL: 'https://cashcycle-e4ee8.firebaseio.com',
      storageBucket: 'cashcycle-e4ee8.appspot.com',
      messagingSenderId: '1037330788710'
  };
  firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
    <Provider store={store}>
        <Router />
    </Provider>
  );
  }
}


export default App;
