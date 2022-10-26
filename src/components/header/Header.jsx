import React from 'react';
import { HandySvg } from 'handy-svg';
import { CSSTransition } from 'react-transition-group';
import iconSrc from '../../Icons/svg/logo.svg';
import s from './Header.module.css';
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
  return (
    <div className={s.container} id="header">
      <div>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="fadeX"
          unmountOnExit
        >
          <a href="#header">
            <HandySvg src={iconSrc} width="90" height="90" />
          </a>
        </CSSTransition>
      </div>

      <div>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="fadeY"
          unmountOnExit
        >
          <nav className={s.headerNav}>
            <ul className={s.list}>
              <li className={s.items}>
                <a href="#about" className={s.link}>
                  Головна
                </a>
              </li>
              <li className={s.items}>
                <a href="#work" className={s.link}>
                  Каталог
                </a>
              </li>
              <li className={s.items}>
                <a href="#services" className={s.link}>
                  Послуги
                </a>
              </li>
              <li className={s.items}>
                <a href="#contact" className={s.link}>
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
        </CSSTransition>
      </div>

      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    </div>
  );
};

export default Header;
