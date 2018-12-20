import { combineReducers, } from 'redux';
import stickies from './stickies';

const rootReducer = combineReducers({
  stickies,
});

export default rootReducer;