import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  POOL_FETCH_SUCCESS,
  POOL_INVEST,
  POOL_INFO
} from './types';


export const poolFetch = () => {
    return (dispatch) => {
      firebase.database().ref('/pools/')
      .on('value', snapshot => {
        dispatch({ type: POOL_FETCH_SUCCESS, payload: snapshot.val() });
      });
    };
};

export const poolInfo = (pool) => {
  return (dispatch) => {
    dispatch({ type: POOL_INFO, payload: pool})
  }
}
