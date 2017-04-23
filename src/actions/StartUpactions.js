import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { FETCH_STARTUPS, STARTUP_FETCH } from './types';

export const fetchstartup = () => {
  return (dispatch) => {
    firebase.database().ref('/startups/')
    .on('value', snapshot => {
      console.log(snapshot.val());
      dispatch({ type: STARTUP_FETCH, payload: snapshot.val() });
    });
  };
};

export const poolstartup = (values) => {
  return (dispatch) => {
    dispatch({ type: FETCH_STARTUPS, payload: values });
  };
};

export const startupfetch = (uid) => {
  return (dispatch) => {
    firebase.database().ref(`/pools/${uid}/startups/`)
    .on('value', snapshot => {
        const value = poolstartup(snapshot.val());
        dispatch({ type: FETCH_STARTUPS, payload: value });
      });
  };
};
