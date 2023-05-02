const initialState = {
  filters: [
    { label: 'Все', cheсked: false, value: 'all' },
    { label: 'Без пересадок', cheсked: true, value: 'none' },
    { label: '1 пересадка', cheсked: false, value: '1' },
    { label: '2 пересадки', cheсked: false, value: '2' },
    { label: '3 пересадки', cheсked: false, value: '3' },
  ],
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTERS': {
      const newFilters = [...state.filters];
      const targetIndex = action.payload;
      const targetItem = newFilters[targetIndex];

      targetItem.cheсked = !targetItem.cheсked;

      newFilters[targetIndex] = targetItem;

      if (targetIndex === 0) {
        newFilters.forEach((item, index) => {
          index > 1 ? (targetItem.cheсked ? (item.cheсked = true) : (item.cheсked = false)) : item.cheсked;
        });
      } else if (targetIndex === 1) {
        newFilters.forEach((item, index) => {
          index !== 1 ? (item.cheсked = !targetItem.cheсked) : item.cheсked;
        });
      }

      const checkAll = newFilters.filter((item, index) => {
        return item.cheсked && index > 1;
      }).length;

      console.log(checkAll);

      if (checkAll === 3) {
        newFilters[0].cheсked = true;
        newFilters[1].cheсked = false;
      } else {
        newFilters[0].cheсked = false;
      }

      if (checkAll !== 0) {
        newFilters[1].cheсked = false;
      } else {
        newFilters[1].cheсked = true;
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
