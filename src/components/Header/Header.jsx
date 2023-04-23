import React from 'react';

import classes from './Header.module.scss';
import { ReactComponent as LogoSvg } from './icons/Logo.svg';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes['header__inner']}>
          <a className={classes['header__logo']} href="#">
            <LogoSvg />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
