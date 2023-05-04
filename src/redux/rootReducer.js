import { combineReducers } from 'redux';

import { filterReducer } from './filterReducer';
import { ticketReducer } from './ticketReducer';

export const rootReducer = combineReducers({ ticketsState: ticketReducer, filtersState: filterReducer });
