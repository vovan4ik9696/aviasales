import { TOGGLE_FILTER } from '../redux/actionTypes';

const initialState = {
  filters: [
    { label: 'Все', checked: true, value: 'all' },
    { label: 'Без пересадок', checked: true, value: 0 },
    { label: '1 пересадка', checked: true, value: 1 },
    { label: '2 пересадки', checked: true, value: 2 },
    { label: '3 пересадки', checked: true, value: 3 },
  ],
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER: {
      const newFilters = [...state.filters];
      const targetIndex = action.payload;
      const targetItem = newFilters[targetIndex];

      targetItem.checked = !targetItem.checked;

      newFilters[targetIndex] = targetItem;

      if (targetIndex === 0) {
        newFilters.forEach((item, index) => {
          index > 0 ? (targetItem.checked ? (item.checked = true) : (item.checked = false)) : item.checked;
        });
      }

      const checkAll = newFilters.filter((item, index) => {
        return item.checked && index > 0;
      }).length;

      if (checkAll === 4) {
        newFilters[0].checked = true;
      } else {
        newFilters[0].checked = false;
      }

      return {
        ...state,
        filters: newFilters,
      };
    }

    default:
      return state;
  }
};
