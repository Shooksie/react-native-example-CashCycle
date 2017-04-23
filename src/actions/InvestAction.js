import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { withdraws } from './DepositActions';
import {
  POOL_INVEST,
  INVESEMENT_AMOUNT
} from './types';


export const investmentChanged = (text) => {
  return {
      type: INVESEMENT_AMOUNT,
      payload: text
  };
};


export const invest = ({ startups, amount, current, goal, uid, category, balance }) => {
    console.log({ startups, amount, current, goal, uid, category });
    const percent = (Number(amount)/ Number(goal)) * 100;
    const ownership = percent;
    const temp = Number(amount) + Number(current);
    current = temp.toString();
    const item = uid;
    return(dispatch) => {
    firebase.database().ref(`/pools/${item}/`)
      .set({ startups, current, goal, category });
      const { currentUser } = firebase.auth();

      firebase.database().ref(`/users/${currentUser.uid}/investments/${item}`)
      .once('value', snapshot => {

          if(snapshot.exists()){
            let val = snapshot.val().amount;
            let perc = snapshot.val().ownership;
            const per = ownership + perc;
            const vals = Number(val) + Number(amount);
            const valu = vals.toString();
            console.log(vals, valu);
            firebase.database().ref(`/users/${currentUser.uid}/investments/${item}`)
            .set({ amount: valu , ownership: per });
          }
          else{
            firebase.database().ref(`/users/${currentUser.uid}/investments/${item}`)
            .set({ amount , ownership});
          }
        });
        const withdraw = amount;
        withdraws({ withdraw, balance });
        dispatch({ type: POOL_INVEST, payload: amount });

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
