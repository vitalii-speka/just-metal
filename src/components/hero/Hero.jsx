import React from "react";
import s from "./Hero.module.css";
import img from "../../Images/hero-img.jpg";
import { CSSTransition } from "react-transition-group";

const Hero = () => {
  return (
    <div className={s.container} id="about">
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="fade-scale"
        unmountOnExit
      >
        <img src={img} alt="gallery" className={s.img}></img>
      </CSSTransition>

      <div className={s.blocText}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={800}
          classNames="fade-scale"
          unmountOnExit
        >
          <h1 className={s.title}>TORG || Just Metal</h1>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={800}
          classNames="fade-scale"
          unmountOnExit
        >
          <h2 className={s.subtitle}>Металосервісний центр "TORG"</h2>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Hero;
