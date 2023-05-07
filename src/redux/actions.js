import TicketServise from '../services/ticketsService';
import { TOGGLE_FILTER, GET_SEARCH_ID, GET_TICKETS, TOGGLE_SORT } from '../redux/actionTypes';

const ticketServise = new TicketServise();

export const filtersUpdate = (index) => ({ type: TOGGLE_FILTER, payload: index });
export const setSearchId = (id) => ({ type: GET_SEARCH_ID, payload: id });
export const setTickets = (payload) => ({ type: GET_TICKETS, payload });
export const sortUpdate = (index) => ({ type: TOGGLE_SORT, payload: index });

export const getSearchId = (dispatch) => {
  ticketServise.getSearchId().then((data) => dispatch(setSearchId(data)));
};

export const getTickets = (searchId) => async (dispatch) => {
  const fetchTickets = async () => {
    const delay = 500;
    const data = await ticketServise.getTickets(searchId);

    dispatch(setTickets(data));

    if (!data.stop) {
      setTimeout(() => {
        fetchTickets();
      }, delay);
    }
  };

  fetchTickets();
};
