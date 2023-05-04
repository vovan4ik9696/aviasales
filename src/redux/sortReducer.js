const initialState = {
  sortList: [
    { id: 0, label: 'самый дешевый', active: true },
    { id: 1, label: 'самый быстрый', active: false },
    { id: 2, label: 'оптимальный', active: false },
  ],
};

export const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SORT': {
      const newState = state.sortList.map((item, index) => {
        if (action.payload === index) {
          item.active = true;
        } else {
          item.active = false;
        }

        return item;
      });

      return {
        ...state,
        sortList: newState,
      };
    }

    default:
      return state;
  }
};
