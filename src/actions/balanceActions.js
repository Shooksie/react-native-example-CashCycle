import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  BALANCE_FETCH_SUCCESS
} from './types';


export const getBalance = () => {
  console.log('fetching balance');
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/account`)
    .on('value', snapshot => {
      console.log(snapshot.val());
      dispatch({ type: BALANCE_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};
