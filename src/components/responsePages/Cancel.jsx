import s from "./Cancel.module.css";
import sad from "../../Icons/svg/sad.svg";
import { HandySvg } from "handy-svg";
import { useNavigate } from "react-router-dom";

const Cancel = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 3000);

  return (
    <div className={s.container}>
      <h2 className={s.text}>Cancel</h2>
      <HandySvg src={sad} width="100" height="100" className={s.svgIcon} />
    </div>
  );
};
export default Cancel;
