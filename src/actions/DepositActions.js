import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  DEPOSIT,
  DEPOSIT_CHANGED,
  DEPOSIT_FAIL,
  DEPOSIT_SUCCESS,
} from './types';


export const depositChanged = (text) => {
  return {
    type: DEPOSIT_CHANGED,
    payload: text
  };
};

export const deposit = ({ amount }) => {
  const { currentUser } = firebase.auth();
  const balance = modify(amount);

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/account`)
      .push({ balance })
      .then(() => {
        dispatch({ type: DEPOSIT });
        Actions.balanceList({ type: 'reset' });
      });
  };
};

export const modify = (number) => {
  const mod = ((number * (number * 1111)) / 1000000);
  return mod;
};
