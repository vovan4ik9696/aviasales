import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, format } from 'date-fns';

import { getSearchId, getTickets } from '../../redux/actions';

import classes from './TicketsList.module.scss';

const TicketsList = () => {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.ticketsState.searchId);
  const tickets = useSelector((state) => state.ticketsState.tickets);
  const filters = useSelector((state) => state.filtersState.filters);
  const sorts = useSelector((state) => state.sortState.sortList);

  const [stopFilter, setStopFilter] = useState('');
  const [sortedTickets, setSortedTickets] = useState(tickets);

  useEffect(() => {
    dispatch(getSearchId);
  }, []);

  useEffect(() => {
    if (searchId) {
      dispatch(getTickets(searchId));
    }
  }, [searchId]);

  const stopFilterValue = () => {
    const result = filters.filter((item) => item.checked).map((item) => item.value);
    if (result.find((item) => item === 'all')) {
      return ['all'];
    }

    return result;
  };

  useEffect(() => {
    setStopFilter(() => stopFilterValue());
  }, [filters]);

  useEffect(() => {
    const sortActive = sorts.find((item) => item.active);

    if (sortActive) {
      const { id } = sortActive;
      let newSortedTickets = [...tickets];
      if (id === 0) {
        newSortedTickets.sort((a, b) => a.price - b.price);
      } else if (id === 1) {
        newSortedTickets.sort((a, b) => {
          const totalDurationA = a.segments.reduce((acc, segment) => acc + segment.duration, 0);
          const totalDurationB = b.segments.reduce((acc, segment) => acc + segment.duration, 0);

          return totalDurationA - totalDurationB;
        });
      }
      setSortedTickets(newSortedTickets);
    }
  }, [sorts, tickets]);

  const packSize = 20;

  const ticketsPack = sortedTickets.map((ticket, index) => {
    if (index < packSize) {
      const { price, segments, carrier } = ticket;

      const segmentsList = segments.map((segment) => {
        const { date, destination, duration, origin, stops } = segment;

        const startTime = new Date(date);
        const endTime = add(startTime, { minutes: duration });
        const time = `${format(startTime, 'HH:mm')} - ${format(endTime, 'HH:mm')}`;

        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;

        for (let i = 0; i < stopFilter.length; i++) {
          const item = stopFilter[i];
          if (item === stops.length || item === 'all') {
            return (
              <div className={classes['tickets__variable']} key={origin + date + destination}>
                <div className={classes['tickets__variable-item']}>
                  <div className={classes['tickets__variable-title']}>{`${origin} - ${destination}`}</div>
                  <div className={classes['tickets__variable-text']}>{time}</div>
                </div>
                <div className={classes['tickets__variable-item']}>
                  <div className={classes['tickets__variable-title']}>В пути</div>
                  <div className={classes['tickets__variable-text']}>{`${hours}ч ${minutes}м`}</div>
                </div>
                <div className={classes['tickets__variable-item']}>
                  <div className={classes['tickets__variable-title']}>{stops.length} пересадки</div>
                  <div className={classes['tickets__variable-text']}>{stops.join(', ')}</div>
                </div>
              </div>
            );
          }
        }
      });

      const filtredSegment = segmentsList.filter((item) => item !== undefined);

      if (filtredSegment.length !== 0) {
        return (
          <li className={classes['tickets__item']} key={price + carrier + segments[0].date}>
            <div className={classes['tickets__header']}>
              <div className={classes['tickets__price']}>{`${price} Р`}</div>
              <div className={classes['tickets__img']}>
                <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="Логотип авиалинии" />
              </div>
            </div>

            {segmentsList}
          </li>
        );
      }
    }
  });

  return <ul className={classes.tickets}>{ticketsPack}</ul>;
};

export default TicketsList;
