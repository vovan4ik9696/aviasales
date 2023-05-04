const initialState = {
  tickets: [],
  searchId: '',
  stop: false,
};

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SEARCH_ID':
      return {
        ...state,
        searchId: action.payload.searchId,
      };

    case 'GET_TICKETS': {
      const { tickets, stop } = action.payload;
      return {
        ...state,
        tickets: [...state.tickets, ...tickets],
        stop: stop,
      };
    }
    default:
      return state;
  }
};
