import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  BALANCE_FETCH_SUCCESS
} from './types';


export const getBalance = () => {
  console.log("here");
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    console.log('dispatching');
    firebase.database().ref(`/users/${currentUser.uid}/account`)
    .on('value', snapshot => {
      dispatch({ type: BALANCE_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const demodify = (value) => {
  const num = (value * 1000000) / 1111;
  return num;
};
