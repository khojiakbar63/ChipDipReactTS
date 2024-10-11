import React from "react";
import { NavLink} from "react-router-dom";
import fairchild from "../../../../assets/images/fairchild.png";
import left from "../../../../assets/images/left.svg";
import right from "../../../../assets/images/right.svg";
import semiconductor from "../../../../assets/images/semiconductor.png";
import fairchildsmall from "../../../../assets/images/fairchildsmall.png";
import infineon from "../../../../assets/images/infineon.png";
import shindengen from "../../../../assets/images/shindengen.png";
import sanken from "../../../../assets/images/sanken.png";
import "./_style.scss";

export const WithLikeProduct: React.FC = () => {
  return (
    <div className="likeproduct">

      <div className="box">
        <h1>С этим товаром покупают</h1>
        <div>
          <img src={fairchild} alt="img" />
          <small>Fairchild</small >
          <NavLink to="/" className="active" style={{ flex: 1, display: 'flex' }}>FSCQ0765RTYDTU, <br />
            Импульсный регулятор…
          </NavLink>
          <span><strong>220</strong>руб.</span>
        </div>
      </div>

      <div className="box2">

        <div className="box2--title">
        <h1>Похожие товарыт</h1>

        <div className="box2--title--icons">
            <img src={left} alt="icon"/>
            <img src={right} alt="icon" />
        </div>

        </div>

        <div className="flex">

          <div className="card">
            <img src={semiconductor} alt="img" />
            <small>ON Semiconductor</small >
            <NavLink to="/" className="active" style={{ flex: 1, display: 'flex', alignItems:'center'}} >FSFR1700XSL, ШИМ-
            контроллер для…
            </NavLink>
            <span><strong>520</strong>руб.</span>
          </div>

          <div className="card">
            <img src={fairchildsmall} alt="img" />
            <small>Fairchild</small >
            <NavLink to="/" className="active" style={{ flex: 1, display: 'flex', justifyContent: 'center' }} >FSFR1800XSL, Контроллер
            резонансного ИИП со…
            </NavLink>
            <span><strong>540</strong>руб.</span>
          </div>

          <div className="card">
            <img src={infineon} alt="img" />
            <small>Infineon</small >
            <NavLink to="/" className="active" style={{ flex: 1, display: 'flex', justifyContent: 'center' }} >ICE3B0565JFKLA1, ШИМ-
            контроллер на токовых…
            </NavLink>
            <span><strong>560</strong>руб.</span>
          </div>

          <div className="card">
            <img src={shindengen} alt="img" />
            <small>Shindengen</small >
            <NavLink to="/" className="active" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>MR4020,SMPS схема
            упpавления,IGBT900V/A,…
            </NavLink>
            <span><strong>600</strong>руб.</span>
          </div>

          <div className="card">
            <img src={sanken} alt="img" />
            <small>Sanken</small >
            <NavLink to="/" className="active" style={{ flex: 1, display: 'flex' }}>SSC9522S,ШИМ-контроллер...
            </NavLink>
            <span><strong>560</strong>руб.</span>
          </div>

        </div>
      </div>
      
    </div>
  );
};
