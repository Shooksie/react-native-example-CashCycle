import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  NAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
 } from './types';


export const emailChanged = (text) => {
  return {
      type: EMAIL_CHANGED,
      payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text
  };
};


export const loginUser = ({ email, password }) => {
    return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => loginUserFail(dispatch));
    Actions.main();
  };
};

export const signup = () => {
  return () => {
  Actions.signup();
  };
};

export const createUser = ({ email, password, name }) => {
  const account = 0;
  return (dispatch) => {
  dispatch({ type: LOGIN_USER });
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(user => createUserSuccess(dispatch, user, name, account))
  .catch(() => loginUserFail(dispatch));
  Actions.main();
  };
};
const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS, payload: user
  });
};
const createUserSuccess = (dispatch, user, name, email, account) => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}/`)
    .set({ name, email, account });
  Actions.main();
  dispatch({
        type: LOGIN_USER_SUCCESS, payload: user
  });
};
