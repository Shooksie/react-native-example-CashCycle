import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { getBalance } from './balanceActions';
import {
  DEPOSIT,
  WITHDRAW,
  DEPOSIT_CHANGED,
  DEPOSIT_FAIL,
  DEPOSIT_SUCCESS,
  VALID
} from './types';


export const validate = (valid) => {
  return (dispatch) => {
    dispatch({ type: VALID, payload: valid})
  }
}
export const depositChanged = ({ prop, value }) => {
  console.log(prop, value);
  return {
      type: DEPOSIT_CHANGED,
      payload: { prop, value }
  };
};

export const deposit = ({ amount, balance }) => {
  console.log(balance);
  const { currentUser } = firebase.auth();
  const temp = Number(amount) + Number(balance);
  balance = temp.toString();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/account`)
      .set({ balance })
      .then(() => {
        dispatch({ type: DEPOSIT, payload: balance });
        Actions.overview();
      });
  };
};
export const withdraws = ({ withdraw, balance }) => {
  console.log("withdrawing");
  const { currentUser } = firebase.auth();
  const temp = Number(balance) - Number(withdraw);
  const prop = 'balance';
  balance = temp.toString();
  console.log(balance);
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/account/`)
      .update({ balance: temp.toString() })
      .then(() => {
        dispatch({ type: WITHDRAW, payload: balance });
        getBalance();
      });
  };
};

export const modify = (number) => {
  const mod = ((number * (number * 1111)) / 1000000);
  return mod;
};
