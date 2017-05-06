import {
  ADDCARD,
  REMOVECARD,
  CARD_FETCH_SUCCESS,
  CARD_CHANGED,
  SETLABEL
} from '../actions/types';


const INITIAL_STATE = {
  number: '',
  cvc: '',
  expiry: '',
  buttonlabel: '',
  cards: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDCARD:
      return { ...state };
    case REMOVECARD:
      return { ...state  };
    case SETLABEL:
      return { ...state, buttonlabel: action.payload };
    case CARD_CHANGED:
      return {
        ...state,
        number: action.payload.number,
        cvc: action.payload.cvc,
        expiry: action.payload.expiry
      };
    case CARD_FETCH_SUCCESS:
      return { ...state, cards: action.payload };
    default:
      return state;

  }
};
