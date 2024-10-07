import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import {CoruselDb} from "../../../mocks/"
import "./style.scss";


export const Carousel: React.FC = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    
  

    const handlePrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? CoruselDb.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const isLastSlide = currentIndex === CoruselDb.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const handleLabelClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-slide-wrapper">
                <div
                    className="carousel-slide"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {CoruselDb.map((image, index) => (
                        <img key={index} src={image.src} alt={image.label} />
                    ))}
                </div>
            </div>

            <div className="nav-links">
                <div className="caruselbtn">
                    <button className="prev-btn" onClick={handlePrev}>
                        <GoArrowLeft />
                    </button>
                    <button className="next-btn" onClick={handleNext}>
                        <GoArrowRight />
                    </button>
                </div>

                {CoruselDb.map((image, index) => (
                    <Link
                        key={index}
                        to="#"
                        className={index === currentIndex ? 'active' : ''}
                        onClick={() => handleLabelClick(index)} // Label bosilganda rasmni o'zgartirish
                    >
                        {image.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};
