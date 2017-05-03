import {
  DEPOSIT,
  WITHDRAW,
  DEPOSIT_CHANGED,
  BALANCE_FETCH_SUCCESS,
  VALID
} from '../actions/types';


const INITIAL_STATE = {
  balance: '',
  amount: '',
  withdraw: '',
  valid: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEPOSIT:
      return { ...state, [action.payload.prop]: action.payload.value,  amount:'' };
    case WITHDRAW:
      console.log(action.payload);
      return { ...state, balance: action.payload.balance, amount:'', withdraw: '' };
    case DEPOSIT_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    case BALANCE_FETCH_SUCCESS:
      return { ...state, balance: action.payload.balance };
    case VALID:
      return { ...state, valid: action.payload };
    default:
      return state;

  }
};
