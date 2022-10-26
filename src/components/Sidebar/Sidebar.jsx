import React from 'react';
//import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
// import { bubble as Menu } from 'react-burger-menu';
import { pushRotate as Menu } from 'react-burger-menu';
// import s from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <Menu right>
      <a className="menu-item" href="#about">
        Головна
      </a>
      <a className="menu-item" href="#work">
        Каталог
      </a>
      <a className="menu-item" href="#services">
        Послуги
      </a>
      <a className="menu-item" href="#contact">
        Контакти
      </a>
    </Menu>
  );
};

export default Sidebar;
