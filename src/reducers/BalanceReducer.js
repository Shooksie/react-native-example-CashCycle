import {
  DEPOSIT,
  WITHDRAW,
  DEPOSIT_CHANGED,
  BALANCE_FETCH_SUCCESS
} from '../actions/types';


const INITIAL_STATE = {
  balance: '0',
  amount: '',
  withdraw: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEPOSIT:
      return { ...state, [action.payload.prop]: action.payload.value };
    case WITHDRAW:
      return { ...state, [action.payload.prop]: action.payload.value };
    case DEPOSIT_CHANGED:
      return { ...state, [action.payload.prop]: action.payload.value };
    case BALANCE_FETCH_SUCCESS:
      return { ...state, balance: action.payload.balance, amount: '' };
    default:
      return state;

  }
};
