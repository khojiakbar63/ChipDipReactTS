import React from "react";
import { Container, Section } from "../../..";
import './_style.scss'
import RelayPng from "../../../../assets/Img/relay.png"
import ChemicalPng from "../../../../assets/Img/chemicals.png"
import ConnectorPng from "../../../../assets/Img/connectors.png"
import OscillosPng from "../../../../assets/Img/oscilloscopes.png"
import ZapchastiPng from "../../../../assets/Img/zapchasti.png"
import AutoPartsPng from "../../../../assets/Img/autoparts.png"
import ProtectPng from "../../../../assets/Img/protect.png"
export const PopCategories: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className="Category">
          <h1>Популярные категории</h1>
          <div className="card-grid">
            <div className="card_1">
              <img src={RelayPng} alt="#" />
              <h2>Реле</h2>
            </div>
            <div>
              <div className="card_2">
                <h1>Химия</h1>
                <img src={ChemicalPng} alt="#" />
              </div>
              <div className="card_3">
                <h1>Разъемы</h1>
                <img src={ConnectorPng} alt="#" />
              </div>
            </div>
            <div className="card_4">
              <h1>Осциллографы <br />
                и аксессуары к ним</h1>
              <img src={OscillosPng} alt="#" />
            </div>

            <div>
              <div className="card_5">
                <h1>Запчасти <br />
                  для электроники <br />
                  и техники</h1>
                <img src={ZapchastiPng} alt="#" />
              </div>
              <div className="flex_card">
                <div className="card_7">
                  <h1>Автозапчасти</h1>
                  <img src={AutoPartsPng} alt="#" />
                </div>
                <div className="card_6">
                  <h1>Устройства
                    защиты</h1>
                  <img src={ProtectPng} alt="#" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </Container>
    </Section >
  );
};
