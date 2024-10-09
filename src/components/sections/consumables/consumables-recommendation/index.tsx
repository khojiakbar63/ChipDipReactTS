import React, { useState } from "react";
import { ConsumablesRecommendationData } from "../../../../mocks";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

import "./_style.scss";

export const ConsumablesRecommendation: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const visibleCount = 4; 

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - visibleCount, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + visibleCount, ConsumablesRecommendationData.length - visibleCount)
    );
  };

  const visibleProducts = ConsumablesRecommendationData.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <div className="consumables-product-list">
      <div className="carousel-header">
        <h2 className="title">Мы рекомендуем</h2>
        <div className="carousel-controls">
          <button onClick={handlePrev} disabled={currentIndex === 0} className="carousel-button">
          <GrLinkPrevious />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + visibleCount >= ConsumablesRecommendationData.length}
            className="carousel-button">
          <GrLinkNext />
          </button>
        </div>
      </div>

      <div className="consumables-product-container">
        {visibleProducts.map((product) => (
          <div key={product.id} className="consumables-product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <div className="vendor">{product.vendor}</div>
              <div className="name">{product.name}</div>
              <div className="price">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
