import React from "react";
import "./_style.scss";
import { data } from "../../../../mocks";
import { Section } from "../../../layouts/section";
import { Container } from "../../../layouts/container";
import { BsBoxArrowUp } from "react-icons/bs";

export const ConsumablesConsumables: React.FC = () => {

  return (

    <Section>
      <Container>
        <div className="wrap">
          <div className="text-wrap">
            <h1>Расходные материалы</h1>
            <p>102789</p>
          </div>
          <div>
            <BsBoxArrowUp/>
          </div>
        </div>
        <div className="cards-container">
          <div className="left-column">
            {data.slice(0, 8).map((card) => (
              <div key={card.id} className="card">
                <img src={card.img} alt={card.title} className="card-img" />
                <div className="card-content">
                  <div className="card-titles">
                    <h1 className="card-title">{card.title}</h1>
                    <p className="card-num">{card.numbers}</p>
                  </div>
                  <div className="card-links">
                    {card.links.map((link) => (
                      <a key={link.id} href={link.url} className="card-link">
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="right-column">
            {data.slice(8, 14).map((card) => (
              <div key={card.id} className="card">
                <img src={card.img} alt={card.title} className="card-img" />
                <div className="card-content">
                  <div className="card-titles">
                    <h1 className="card-title">{card.title}</h1>
                    <p className="card-num">{card.numbers}</p>
                  </div>
                  <div className="card-links">
                    {card.links.map((link) => (
                      <a key={link.id} href={link.url} className="card-link">
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>





  );
};

