import firebase from 'firebase';
import { CURRENT_INVESTMENTS, NO_INVESTMENTS } from './types';

export const fetchInvestments = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/investments/`).on(
      'value', snapshot => {
        if(snapshot.val() === null){
          dispatch({ type: NO_INVESTMENTS });
        }
        else {
          dispatch({ type: CURRENT_INVESTMENTS, payload: snapshot.val()});
        }
      }
    )
  };
}
