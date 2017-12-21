/**
 * server para emglobar todos os reducers em uma única variável
 * combineReducers
 */

import { combineReducers } from 'redux';

import todos from './todos';

export default combineReducers({
  todos,
});