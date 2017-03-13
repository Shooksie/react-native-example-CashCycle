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
    apiKey: 'AIzaSyD2xLrYfGcWKX6fMxNVohXqRITB7Ha3kAE',
    authDomain: 'manager-65ff2.firebaseapp.com',
    databaseURL: 'https://manager-65ff2.firebaseio.com',
    storageBucket: 'manager-65ff2.appspot.com',
    messagingSenderId: '69236731831'
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
