import React from "react";
import { CSSTransition } from "react-transition-group";
import s from "./Services.module.css";
import img1 from "../../Images/transportirovka.jpg";
import img2 from "../../Images/rezka-metala.jpg";
import img3 from "../../Images/ekskavator.jpg";

const Work = () => {
  return (
    <div id="services">
      <CSSTransition
        in={true}
        appear={true}
        timeout={250}
        classNames="fade-scale"
        unmountOnExit
      >
        <h2 className={s.title}>Послуги</h2>
      </CSSTransition>

      <ul className={s.list}>
        <li>
          <div className={s.imgGroup}>
            <img src={img1} alt="Доставка" className={s.img}></img>
            <p className={s.p}>Доставка</p>
          </div>
        </li>
        <li>
          <div className={s.imgGroup}>
            <img src={img2} alt="Порізка метала" className={s.img}></img>
            <p className={s.p}>Порізка метала</p>
          </div>
        </li>
        <li>
          <div className={s.imgGroup}>
            <img src={img3} alt="Послуги екскаватора" className={s.img}></img>
            <p className={s.p}>Послуги екскаватора</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Work;
