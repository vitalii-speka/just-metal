import s from "./Success.module.css";
import smile from "../../images/svg/smile.svg";
import { HandySvg } from 'handy-svg';
import {useNavigate} from 'react-router-dom'

const Success = () => { 
    const navigate = useNavigate()
    
    setTimeout(() => {navigate('/')}, 3000);
     
    return (
        <div className={s.container}>
            <h2 className={s.text}>Successful</h2>
             <HandySvg
                        src={smile}
                        width="100"
                        height="100"
                        className={s.svgIcon}
            />
        
        </div>
    )
}
export default Success;