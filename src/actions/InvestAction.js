import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { withdraws } from './DepositActions';
import {
  POOL_INVEST,
  INVESEMENT_AMOUNT,
  DEPOSIT_CHANGED
} from './types';


export const investmentChanged = (value) => {
  return {
      type: DEPOSIT_CHANGED,
      payload: { withdraw: value }
  };
};


export const invest = ({ startups, withdraw, current, goal, uid, category, balance }) => {
    const percent = (Number(withdraw)/ Number(goal)) * 100;
    const ownership = percent;
    const temp = Number(withdraw) + Number(current);
    const newcurrent = temp.toString();
    const item = uid;
    return(dispatch) => {
    firebase.database().ref(`/pools/${item}/`)
      .set({ startups, current: newcurrent, goal, category });
      const { currentUser } = firebase.auth();

      firebase.database().ref(`/users/${currentUser.uid}/investments/${item}`)
      .once('value', snapshot => {

          if(snapshot.exists()){
            let val = snapshot.val().amount;
            let perc = snapshot.val().ownership;
            const per = ownership + perc;
            const vals = Number(val) + Number(withdraw);
            const valu = vals.toString();
            firebase.database().ref(`/users/${currentUser.uid}/investments/${item}`)
            .set({ amount: valu , ownership: per });
          }
          else{
            firebase.database().ref(`/users/${currentUser.uid}/investments/${item}`)
            .set({ amount: withdraw , ownership});
          }
        });
        dispatch({ type: POOL_INVEST, payload:{ amount: withdraw } });

      }
    }

  export const updatePool = ({ item, current, goal, category, startups }) => {

  }

  export const updateUser = ({ ownership, amount, item}) => {
    const { currentUser } = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/investments/${item}`)
    .on('value', snapshot => {
        const investment = (snapshot.val() !== null);
        if(investment){
          let val = snapshot.val().amount;
          let perc = snapshot.val().ownership;
          const per = ownership + perc;
          const vals = Number(val) + Number(amount);
          const valu = vals.toString();
          firebase.database().ref(`/users/${currentUser.uid}/investments/${item}`)
          .set({ amount: valu , ownership: per });
        }
        else{
          firebase.database().ref(`/users/${currentUser.uid}/investments/${item}`)
          .set({ amount , ownership});
        }
      }
    );
}
