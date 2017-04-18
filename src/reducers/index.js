import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BalanceReducer from './BalanceReducer';
import PoolReducer from './PoolReducer';

export default combineReducers({
  auth: AuthReducer,
  balance: BalanceReducer,
  pools: PoolReducer,
});
