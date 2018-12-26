import {combineReducers} from 'redux';
import app_state from './app_state';
import players from './players';
import fixtures from './fixtures';

const appReducer = combineReducers({
  app_state,
  players,
  fixtures
});

export default (state, action) => {
  if(action.type === "RESET") {
    return {}
  }
  return appReducer(state,action);
}

