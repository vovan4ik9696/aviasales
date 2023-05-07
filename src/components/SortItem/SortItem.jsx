import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { TOGGLE_SORT } from '../../redux/actionTypes';
import classes from '../SortList/SortList.module.scss';

const SortItem = ({ sortTab: { id, label, active } }) => {
  const classList = classNames(classes['sort__item'], { [classes['sort__item--active']]: active });
  const dispatch = useDispatch();

  const handleToggleSort = () => {
    dispatch({ type: TOGGLE_SORT, payload: id });
  };

  return (
    <li className={classList} onClick={handleToggleSort}>
      {label}
    </li>
  );
};

export default SortItem;
