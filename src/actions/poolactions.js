import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  POOL_FETCH_SUCCESS,
  POOL_INVEST
} from './types';


export const poolFetch = () => {
    return (dispatch) => {
      firebase.database().ref('/pools/')
      .on('value', snapshot => {
        dispatch({ type: POOL_FETCH_SUCCESS, payload: snapshot.val() });
      });
    };
};
