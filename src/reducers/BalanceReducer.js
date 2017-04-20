import {
  DEPOSIT,
  BALANCE_FETCH_SUCCESS
} from '../actions/types';


const INITIAL_STATE = {
  balance: 0,
  amount: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEPOSIT:
      return { ...state, deposit: action.payload };
    case BALANCE_FETCH_SUCCESS:
      return { ...state, deposit: action.payload };
    default:
      return state;

  }
};
