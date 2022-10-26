import React from "react";
import s from "./Hero.module.scss";
import img from "../../Images/hero-img.jpg";
import { CSSTransition } from "react-transition-group";
import transition from "../../Utils/anim.module.scss";

const Hero = () => {
  return (
    <div className={s.container} id="about">
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={transition}
        unmountOnExit
      >
        <img src={img} alt="mainImage" className={s.img}></img>
      </CSSTransition>

      <div className={s.blocText}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={800}
          classNames={transition}
          unmountOnExit
        >
          <h1 className={s.title}>TORG || Just Metal</h1>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={800}
          // classNames="fade-scale"
          classNames={transition}
          unmountOnExit
        >
          <h2 className={s.subtitle}>Металосервісний центр "TORG"</h2>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Hero;
