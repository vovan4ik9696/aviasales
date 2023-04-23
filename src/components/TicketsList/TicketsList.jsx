import React from 'react';

import classes from './TicketsList.module.scss';

const TicketsList = () => {
  return (
    <ul className={classes.tickets}>
      <li className={classes['tickets__item']}>
        <div className={classes['tickets__header']}>
          <div className={classes['tickets__price']}>12 400 P</div>
          <div className={classes['tickets__img']}>
            <img src="/" alt="Логотип авиалинии" />
          </div>
        </div>
        <div className={classes['tickets__variable']}>
          <div className={classes['tickets__variable-item']}>
            <div className={classes['tickets__variable-title']}>MOW – HKT</div>
            <div className={classes['tickets__variable-text']}>10:45 – 08:00</div>
          </div>
          <div className={classes['tickets__variable-item']}>
            <div className={classes['tickets__variable-title']}>В пути</div>
            <div className={classes['tickets__variable-text']}>21ч 15м</div>
          </div>
          <div className={classes['tickets__variable-item']}>
            <div className={classes['tickets__variable-title']}>2 пересадки</div>
            <div className={classes['tickets__variable-text']}>HKG, JNB</div>
          </div>
        </div>

        <div className={classes['tickets__variable']}>
          <div className={classes['tickets__variable-item']}>
            <div className={classes['tickets__variable-title']}>MOW – HKT</div>
            <div className={classes['tickets__variable-text']}>10:45 – 08:00</div>
          </div>
          <div className={classes['tickets__variable-item']}>
            <div className={classes['tickets__variable-title']}>В пути</div>
            <div className={classes['tickets__variable-text']}>21ч 15м</div>
          </div>
          <div className={classes['tickets__variable-item']}>
            <div className={classes['tickets__variable-title']}>2 пересадки</div>
            <div className={classes['tickets__variable-text']}>HKG, JNB</div>
          </div>
        </div>
      </li>

      <li className={classes['tickets__item']}>
        <div className={classes['tickets__header']}>
          <div className={classes['tickets__price']}>12 400 P</div>
          <div className={classes['tickets__img']}>
            <img src="/" alt="Логотип авиалинии" />
          </div>
        </div>
        <div className={classes['tickets__variable']}>
          <div className={classes['tickets__variable-item']}>
            <div className={classes['tickets__variable-title']}>MOW – HKT</div>
            <div className={classes['tickets__variable-text']}>10:45 – 08:00</div>
          </div>
          <div className={classes['tickets__variable-item']}>
            <div className={classes['tickets__variable-title']}>В пути</div>
            <div className={classes['tickets__variable-text']}>21ч 15м</div>
          </div>
          <div className={classes['tickets__variable-item']}>
            <div className={classes['tickets__variable-title']}>2 пересадки</div>
            <div className={classes['tickets__variable-text']}>HKG, JNB</div>
          </div>
        </div>

        <div className={classes['tickets__variable']}>
          <div className={classes['tickets__variable-item']}>
            <div className={classes['tickets__variable-title']}>MOW – HKT</div>
            <div className={classes['tickets__variable-text']}>10:45 – 08:00</div>
          </div>
          <div className={classes['tickets__variable-item']}>
            <div className={classes['tickets__variable-title']}>В пути</div>
            <div className={classes['tickets__variable-text']}>21ч 15м</div>
          </div>
          <div className={classes['tickets__variable-item']}>
            <div className={classes['tickets__variable-title']}>2 пересадки</div>
            <div className={classes['tickets__variable-text']}>HKG, JNB</div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default TicketsList;
