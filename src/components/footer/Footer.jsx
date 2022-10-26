import PaymentForm from "../FormPay/Form";
import s from "./Footer.module.css";
import { HandySvg } from "handy-svg";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import iconClock from "../../Icons/svg/clock-3917267.svg";
import iconEmail from "../../Icons/svg/email-3916611.svg";
import iconMaps from "../../Icons/svg/maps-3916880.svg";
import iconPhone from "../../Icons/svg/phone-call-5070407.svg";

const Footer = () => {
  // const handleClick = () => {
  //   ('Not implemented. Redirect to Social Media page.');
  // };

  return (
    <div className={s.container} id="contact">
      {/* <h3>Контакти</h3> */}

      <ul className={s.listUl}>
        <li className={s.listLi}>
          <a href="tel:+380472515400">
            <HandySvg
              src={iconPhone}
              width="27"
              height="30"
              className={s.svgIcon}
            />
            <p>+38 (0472) 251-5400</p>
          </a>
        </li>

        <li className={s.listLi}>
          <a href="mailto:levatortorg@gmail.com">
            <HandySvg
              src={iconEmail}
              width="30"
              height="30"
              className={s.svgIcon}
            />
            <p>elevatortorg@gmail.com</p>
          </a>
        </li>
        <li className={s.listLi}>
          <a href="https://maps.google.com/maps?q=провулок Анатолія Пашкевича, 8, Черкаси, Черкаська область, 18028">
            <HandySvg
              src={iconMaps}
              width="27"
              height="30"
              className={s.svgIcon}
            />
            <p>г. Черкаси, пров. </p>
            <p>Анатолія Пашкевича 8</p>
          </a>
        </li>
        <li className={s.listLi}>
          <a href="#.">
            <HandySvg
              src={iconClock}
              width="30"
              height="30"
              className={s.svgIcon}
            />
            <p>Пн-Пт </p>
            <p>8:00 - 17:00</p>
          </a>
        </li>

        <li className={s.listLi}>
          <PaymentForm />
        </li>
      </ul>

      {/* <ToastContainer autoClose="3000" /> */}
    </div>
  );
};

export default Footer;
