import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BalanceReducer from './BalanceReducer';
import PoolReducer from './PoolReducer';
import StartupsReducer from './StartupsReducer';
import StartupReducer from './StartupReducer';

export default combineReducers({
  auth: AuthReducer,
  balance: BalanceReducer,
  pools: PoolReducer,
  startups: StartupsReducer,
  startup: StartupReducer
});
