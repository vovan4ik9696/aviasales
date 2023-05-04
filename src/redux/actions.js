import TicketServise from '../services/ticketsService';

const ticketServise = new TicketServise();

export const filtersUpdate = (index) => ({ type: 'TOGGLE_FILTER', payload: index });
export const setSearchId = (id) => ({ type: 'GET_SEARCH_ID', payload: id });
export const setTickets = (payload) => ({ type: 'GET_TICKETS', payload });
export const sortUpdate = (index) => ({ type: 'TOGGLE_SORT', payload: index });

export const getSearchId = (dispatch) => {
  ticketServise.getSearchId().then((data) => dispatch(setSearchId(data)));
};

export const getTickets = (searchId) => async (dispatch) => {
  const fetchTickets = async () => {
    const delay = 500;
    try {
      const data = await ticketServise.getTickets(searchId);
      dispatch(setTickets(data));

      if (!data.stop) {
        setTimeout(() => {
          fetchTickets();
        }, delay);
      }
    } catch (error) {
      if (error instanceof SyntaxError) {
        setTimeout(() => {
          fetchTickets();
        }, delay);
      }
    }
  };

  fetchTickets();
};
