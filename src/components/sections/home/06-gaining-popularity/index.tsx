import React from "react";
import { Container, Section } from "../../../../components";
import { popularData } from "../../../../mocks";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

import './_style.scss'

export const GainingPopularity: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className="popular-section">
          <div className="flex">
            <h2 className="section-title">{popularData.title}</h2>
            <div className="arrows-button">
              <button className="arrow-right"><GoArrowLeft /></button>
              <button className="arrow-left"><GoArrowRight /></button>
            </div>
          </div>
          <div className="cards-container">
            {popularData.products.filter((_, index) => index !== popularData.products.length - 1).map((product) => (
              <div key={product.id} className="card">
                {product.imageUrl && <img src={product.imageUrl} alt={product.name} />}
                <h3 className="card-brand">{product.brand}</h3>
                <div className="card-text">
                  <p className="card-name">{product.name}</p>
                </div>
                <div className="card-footer">
                  {product.price && <p className="card-price">{product.price}</p>}
                </div>
              </div>
            ))}
            <div className="hits-promo">
              <div className="promo-text">
                <h3 className='promo-title'>{popularData.products[popularData.products.length - 1].promoName}</h3>
                <p className='promo-description'>{popularData.products[popularData.products.length - 1].promoText}</p>
              </div>
              <button className="promo-button">{popularData.products[popularData.products.length - 1].buttonText}</button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
