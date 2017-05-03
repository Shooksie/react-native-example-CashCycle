import {
  CURRENT_INVESTMENTS,
  NO_INVESTMENTS
} from '../actions/types';


INITIAL_STATE = {
  Investment: false,
  InvestmentsList: {}
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_INVESTMENTS:
      return {...state, InvestmentsList: action.payload, Investment: true };
    case NO_INVESTMENTS:
      return {...state, Investment: false}
    default:
      return state;
  }
}
