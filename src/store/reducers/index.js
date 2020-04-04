import { combineReducers } from 'redux';
import cards from '../features/cards';

const rootReducers = combineReducers({
  cards,
});

export default rootReducers;
