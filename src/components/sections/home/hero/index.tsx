import React from "react";
import { Container, Section } from "../../../../components";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import HeroImg from "../../../../assets/Img/HeroImg.png"
import CaruselImg from "../../../../assets/Img/CaruselImg_1.png"
import CaruselIMg2 from "../../../../assets/Img/CaruselImg_2.png"

import './_style.scss'

export const Hero: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className="hero">

          <div className="carousel">
            <input type="radio" name="slides" id="slide1" checked />
            <input type="radio" name="slides" id="slide2" />
            <input type="radio" name="slides" id="slide3" />

            <div className="slides">
              <div className="slide">
                <img src={HeroImg} alt="#" />
              </div>
              <div className="slide">
                <img src={CaruselImg} alt="#" />
              </div>
              <div className="slide">
                <img src={CaruselIMg2} alt="#" />
              </div>
            </div>
          </div>

          <nav className="navbar">
            <div className="controls">
              <label htmlFor="slide1" className="prev"><GoArrowLeft /> </label>
              <label htmlFor="slide2" className="next"><GoArrowRight /></label>

            </div>
            <ul className="navbar__list">
              <li className="navbar__item"><a href="#" className="navbar__link">Доставка в ЕАЭС </a></li>
              <li className="navbar__item"><a href="#" className="navbar__link ">Элементы подвески</a></li>
              <li className="navbar__item"><a href="#" className="navbar__link ">MEAN WELL // XLG</a></li>
              <li className="navbar__item"><a href="#" className="navbar__link ">Кабельные тестеры Noyafa</a></li>
              <li className="navbar__item"><a href="#" className="navbar__link ">Электролитические конденсаторы jb</a></li>
            </ul>
          </nav>
        </div>
      </Container>
    </Section>
  );
};
