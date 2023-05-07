import React from 'react';
import { useSelector } from 'react-redux';

import SortItem from '../SortItem';

import classes from './SortList.module.scss';

const SortList = () => {
  const sortTabs = useSelector((state) => state.sortState.sortList);
  const sortElements = sortTabs.map((item) => {
    return <SortItem key={item.id} sortTab={item} />;
  });

  return <ul className={classes.sort}>{sortElements}</ul>;
};

export default SortList;
