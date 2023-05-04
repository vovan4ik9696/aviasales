const initialState = {
  filters: [
    { label: 'Все', checked: false, value: 'all' },
    { label: 'Без пересадок', checked: true, value: 0 },
    { label: '1 пересадка', checked: false, value: 1 },
    { label: '2 пересадки', checked: false, value: 2 },
    { label: '3 пересадки', checked: false, value: 3 },
  ],
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTERS': {
      const newFilters = [...state.filters];
      const targetIndex = action.payload;
      const targetItem = newFilters[targetIndex];

      targetItem.checked = !targetItem.checked;

      newFilters[targetIndex] = targetItem;

      if (targetIndex === 0) {
        newFilters.forEach((item, index) => {
          index > 1 ? (targetItem.checked ? (item.checked = true) : (item.checked = false)) : item.checked;
        });
      } else if (targetIndex === 1) {
        newFilters.forEach((item, index) => {
          index !== 1 ? (item.checked = !targetItem.checked) : item.checked;
        });
      }

      const checkAll = newFilters.filter((item, index) => {
        return item.checked && index > 1;
      }).length;

      if (checkAll === 3) {
        newFilters[0].checked = true;
        newFilters[1].checked = false;
      } else {
        newFilters[0].checked = false;
      }

      if (checkAll !== 0) {
        newFilters[1].checked = false;
      } else {
        newFilters[1].checked = true;
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
