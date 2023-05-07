import { useDispatch } from 'react-redux';

import { TOGGLE_FILTER } from '../../redux/actionTypes';
import classes from '../Filters/Filters.module.scss';

const FiltersItem = ({ filterData: { label, checked, value }, index }) => {
  const dispatch = useDispatch();

  const handleFilterChange = () => {
    dispatch({ type: TOGGLE_FILTER, payload: index });
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
