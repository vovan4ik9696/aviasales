import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uukey } from 'uuid';

import FiltersItem from '../FiltersItem';

import classes from './Filters.module.scss';

const Filters = () => {
  const filters = useSelector((state) => state.filtersState.filters);
  const filtersElements =
    filters &&
    filters.map((item, index) => {
      return <FiltersItem key={uukey()} filterData={item} index={index} />;
    });

  return (
    <aside className={classes.filters}>
      <h2 className={classes['filters__title']}>Количество пересадок</h2>
      <ul className={classes['filters__list']}>{filtersElements}</ul>
    </aside>
  );
};

export default Filters;
