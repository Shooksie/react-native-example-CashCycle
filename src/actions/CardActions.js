import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  CARD_FETCH_SUCCESS,
  ADDCARD,
  REMOVECARD,
  CARD_CHANGED,
  SETLABEL
} from './types';


export const getCards = () => {
  console.log('fetching balance');
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/cards`)
    .on('value', snapshot => {
      console.log(snapshot.val());
      dispatch({ type: CARD_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};
export const cardChanged = ({ number, expiry, cvc}) => {
  return {
        type: CARD_CHANGED,
        payload: { number, expiry, cvc }
      };
}
export const removeCard = ({ uid }) => {

}
export const addCard = ({ cvc, expiry, number, type }) => {
  return(dispatch) => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}/cards`)
  .push({ cvc, expiry, number, type });
    dispatch({ type: ADDCARD });
  }
}
export const setLabel = (text) => {
  return(dispatch) => {
    dispatch({ type: SETLABEL, payload: text })
  };
}
export const demodify = (value) => {
  const num = (value * 1000000) / 1111;
  return num;
};
