import React from 'react';
import { v4 as uukey } from 'uuid';

import SortItem from '../SortItem';

import classes from './SortList.module.scss';

const SortList = () => {
  const sortTabs = [
    { label: 'Самый дешевый', active: true },
    { label: 'Самый быстрый', active: false },
    { label: 'Оптимальный', active: false },
  ];
  const sortElements = sortTabs.map((item) => {
    return <SortItem key={uukey()} sortTab={item} />;
  });

  return <ul className={classes.sort}>{sortElements}</ul>;
};

export default SortList;
