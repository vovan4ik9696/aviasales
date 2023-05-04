import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uukey } from 'uuid';
import { add, format } from 'date-fns';

import { getSearchId, getTickets } from '../../redux/actions';

import classes from './TicketsList.module.scss';

const TicketsList = () => {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.ticketsState.searchId);
  const tickets = useSelector((state) => state.ticketsState.tickets);

  useEffect(() => {
    dispatch(getSearchId);
  }, []);

  useEffect(() => {
    if (searchId) {
      dispatch(getTickets(searchId));
    }
  }, [searchId]);
  console.log(tickets);

  const packSize = 20;
  const ticketsPack = tickets.map((ticket, index) => {
    if (index < packSize) {
      const { price, segments } = ticket;

      const segmentsList = segments.map((segment) => {
        const { date, destination, duration, origin, stops } = segment;
        const startTime = new Date(date);
        const endTime = add(startTime, { minutes: duration });
        const time = `${format(startTime, 'HH:mm')} - ${format(endTime, 'HH:mm')}`;

        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;

        return (
          <div className={classes['tickets__variable']} key={uukey()}>
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
      });

      return (
        <li className={classes['tickets__item']} key={uukey()}>
          <div className={classes['tickets__header']}>
            <div className={classes['tickets__price']}>{`${price} Р`}</div>
            <div className={classes['tickets__img']}>
              <img src="/" alt="Логотип авиалинии" />
            </div>
          </div>

          {segmentsList}
        </li>
      );
    }
  });

  return <ul className={classes.tickets}>{ticketsPack}</ul>;
};

export default TicketsList;
