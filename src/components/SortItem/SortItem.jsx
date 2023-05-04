import React from 'react';
import { useDispatch } from 'react-redux';

import classes from '../SortList/SortList.module.scss';

const SortItem = ({ sortTab: { id, label, active } }) => {
  const classList = active ? `${classes['sort__item']} ${classes['sort__item--active']}` : classes['sort__item'];
  const dispatch = useDispatch();

  return (
    <li className={classList} onClick={() => dispatch({ type: 'TOGGLE_SORT', payload: id })}>
      {label}
    </li>
  );
};

export default SortItem;
