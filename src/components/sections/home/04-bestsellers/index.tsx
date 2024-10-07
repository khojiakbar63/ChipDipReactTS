import React from 'react';
import { hitsData } from '../../../../mocks';
import { Container, Section } from "../../../../components";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

import './_style.scss';

export const Bestsellers: React.FC = () => {
    return (
        <Section>
            <Container>
                <div className="hits-section">
                    <div className="flex">
                        <h2 className="section-title">{hitsData.title}</h2>
                        <div className="arrows-button">
                            <button className="arrow-right"><GoArrowLeft /></button>
                            <button className="arrow-left"><GoArrowRight /></button>
                        </div>
                    </div>
                    <div className="cards-container">
                        {hitsData.products
                            .filter((_, index) => index !== hitsData.products.length - 1)
                            .map((product) => (
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
                        <h3 className='promo-title'>{hitsData.products[hitsData.products.length - 1].promoName}</h3>
                        <p className='promo-description'>{hitsData.products[hitsData.products.length - 1].promoText}</p>
                        </div>
                        <button className="promo-button">{hitsData.products[hitsData.products.length - 1].buttonText}</button>
                    </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
