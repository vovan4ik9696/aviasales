import { combineReducers } from 'redux';

import { filterReducer } from './filterReducer';
import { ticketReducer } from './ticketReducer';
import { sortReducer } from './sortReducer';

export const rootReducer = combineReducers({
  ticketsState: ticketReducer,
  filtersState: filterReducer,
  sortState: sortReducer,
});
