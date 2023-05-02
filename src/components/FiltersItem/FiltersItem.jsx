import React from 'react';
import { useDispatch } from 'react-redux';

import classes from '../Filters/Filters.module.scss';

const FiltersItem = ({ filterData: { label, cheсked, value }, index }) => {
  const dispatch = useDispatch();

  const handleFilterChange = () => {
    dispatch({ type: 'TOGGLE_FILTERS', payload: index });
  };

  return (
    <li className={classes['filters__item']}>
      <input
        className={classes['filters__checkbox']}
        checked={cheсked}
        type="checkbox"
        name={value}
        value={value}
        id={value}
        onChange={handleFilterChange}
      />
      <label htmlFor={value}>{label}</label>
    </li>
  );
};

export default FiltersItem;
