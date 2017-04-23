import { INVESEMENT_AMOUNT, POOL_INVEST } from '../actions/types';

const INITIAL_STATE = {
  amount: '',
  current: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case INVESEMENT_AMOUNT:
        return { ...state, amount: action.payload };
      case POOL_INVEST:
        return { ...state, current: action.payload , amount: ''};
      default:
        return state;
  }
}
