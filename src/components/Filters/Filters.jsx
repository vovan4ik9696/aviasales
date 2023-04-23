import React from 'react';
import FiltersItem from '../FiltersItem';
import { v4 as uukey } from 'uuid';

import classes from './Filters.module.scss';

const Filters = () => {
  const filters = [
    { label: 'Все', cheсked: false, value: 'all' },
    { label: 'Без пересадок', cheсked: false, value: 'none' },
    { label: '1 пересадка', cheсked: false, value: '1' },
    { label: '2 пересадки', cheсked: false, value: '2' },
    { label: '3 пересадки', cheсked: false, value: '3' },
  ];

  const filtersElements = filters.map((item) => {
    return <FiltersItem key={uukey()} filterData={item} />;
  });

  return (
    <aside className={classes.filters}>
      <h2 className={classes['filters__title']}>Количество пересадок</h2>
      <ul className={classes['filters__list']}>{filtersElements}</ul>
    </aside>
  );
};

export default Filters;
