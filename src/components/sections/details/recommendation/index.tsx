import React from "react";
import { productRecommendations } from '../../../../mocks'
import "./_style.scss";

export const Recommendation: React.FC = () => {

  return (
    <div className="product-list">
    <h2 className="title">Мы рекомендуем</h2>
    <div className="product-container">
      {productRecommendations.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <p className="product-name">{product.name}</p>
        </div>
      ))}
    </div>
  </div>

  );
};
