import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  DEPOSIT,
  WITHDRAW,
  DEPOSIT_CHANGED,
  DEPOSIT_FAIL,
  DEPOSIT_SUCCESS,
} from './types';


export const depositChanged = ({ prop, value }) => {
  return {
    type: DEPOSIT_CHANGED,
    payload: { prop, value }
  };
};

export const deposit = ({ amount, balance }) => {
  const { currentUser } = firebase.auth();
  const temp = Number(amount) + Number(balance);
  const prop = 'balance';
  balance = temp.toString();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/account`)
      .set({ balance })
      .then(() => {
        dispatch({ type: DEPOSIT, payload: { prop: balance } });
        Actions.overview();
      });
  };
};
export const withdraws = ({ withdraw, balance }) => {
  console.log(withdraw, balance);
  const { currentUser } = firebase.auth();
  const temp = Number(balance) - Number(withdraw);
  const prop = 'balance';
  balance = temp.toString();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/account`)
      .set({ balance })
      .then(() => {
        dispatch({ type: DEPOSIT, payload: { prop: balance } });
        Actions.overview();
      });
  };
};

export const modify = (number) => {
  const mod = ((number * (number * 1111)) / 1000000);
  return mod;
};
