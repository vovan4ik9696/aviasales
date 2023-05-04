import { useDispatch } from 'react-redux';

import classes from '../Filters/Filters.module.scss';

// eslint-disable-next-line no-unused-vars
const FiltersItem = ({ filterData: { label, checked, value }, index }) => {
  const dispatch = useDispatch();

  const handleFilterChange = () => {
    dispatch({ type: 'TOGGLE_FILTERS', payload: index });
  };

  return (
    <li className={classes['filters__item']}>
      <input
        className={classes['filters__checkbox']}
        checked={checked}
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
