import React, { useState } from 'react';
import "./_style.scss";
import {text, previewText } from '../../../../mocks';
import { FaChevronDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

export const ConsumablesDescription: React.FC = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      {isExpanded
        ? text.map((paragraph, index) => (
            <p key={index} className="paragraph">{paragraph}</p>
          ))
        : previewText.map((paragraph, index) => (
            <p key={index} className={`paragraph ${index === previewText.length - 1 ? 'blurred' : ''}`}>{paragraph}</p>
          ))}
      <button
        onClick={handleToggle}
        className="toggle-btn"
      >
        {isExpanded ? (
        <div className='icon-wrap'>
          <p className='icon-text '>Скрыть текст</p> <FaAngleUp fontSize='8px' color='#1C2D38' />
        </div>
      ) : (
        <div className='icon-wrap'>
          <p className='icon-text '>показать весь текст</p> < FaChevronDown  fontSize='8px' color='#1C2D38' />
        </div>
      )}
      </button>
    </div>
  );
};
