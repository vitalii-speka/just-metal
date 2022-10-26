import React from "react";
import s from "./Work.module.css";
import img1 from "../../images/krug.jpeg";
import img2 from "../../images/ugol.jpg";
import img3 from "../../images/truba-profilna.jpg";
import img4 from "../../images/list_stal_noj.jpg";
import img5 from "../../images/Shveller-820x510.png";
import img6 from "../../images/armatura2.jpeg";


const Work = () => {
    return (
        <div id="work">
            <h2 className={s.title}>Каталог</h2>
            <ul className={s.list}>
                <li>
                    <div className={s.imgGroup} >
                        <img src={img1} alt="Круг" className={s.img}></img>
                        <p className={s.p}>Круг</p>
                    </div>
                </li>
                <li>
                    <div className={s.imgGroup} >
                        <img src={img2} alt="Кутики" className={s.img}></img>
                        <p className={s.p}>Кутики</p>
                    </div>
                </li>
                <li>
                    <div className={s.imgGroup} >
                        <img src={img3} alt="Труба-профільна" className={s.img}></img>
                        <p className={s.p}>Труба профільна</p>
                    </div>
                </li>
                <li>
                    <div className={s.imgGroup} >
                        <img src={img4} alt="Листи" className={s.img}></img>
                        <p className={s.p}>Листи</p>
                    </div>
                </li>
                <li>
                    <div className={s.imgGroup} >
                        <img src={img5} alt="Швелер" className={s.img}></img>
                        <p className={s.p}>Швелер</p>
                    </div>
                </li>
                <li>
                    <div className={s.imgGroup} >
                        <img src={img6} alt="Арматура" className={s.img}></img>
                        <p className={s.p}>Арматура</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Work;