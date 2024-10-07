import React, { useState } from "react";
import { Flex, Box, Image } from '@chakra-ui/react';
import "./_style.scss";
import { newsData } from '../mock/mock.js';

export const News: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 1; 
  const totalItems = newsData.length; 

  const handleLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + totalItems) % totalItems);
  };

  const handleRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % totalItems);
  };

  const visibleItems = newsData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <Flex className="news">
      <h3>Новости</h3>
      <Box flex="1" bg="#F1F3F5" px={5} py={5} className="newsCard">
        <div className="pagination">
          <div></div>
          <div className="paginationItem">
            <button className="handleBtn" onClick={handleLeft}><i className="bi bi-arrow-left"></i></button>
            <button className="handleBtn" onClick={handleRight}><i className="bi bi-arrow-right"></i></button>
          </div>
        </div>
        <div className="partItems">
          {visibleItems.map((item, index) => (
            <Box key={index} className="newsBox">
              <Image src={item.img1} alt="" />
              <div className="aboutInfo">
                <p>{item.date}</p>
                <h3>{item.description}</h3>
              </div>
            </Box>
          ))}
          {visibleItems.map((item, index) => (
            <Box key={index} className="newsBox">
              <Image src={item.img2} alt="" />
              <div className="aboutInfo">
                <p>{item.date2}</p>
                <h3>{item.description2}</h3>
              </div>
            </Box>
          ))}
          {visibleItems.map((item, index) => (
            <Box key={index} className="newsBox">
              <Image src={item.img3} alt="" />
              <div className="aboutInfo">
                <p>{item.date3}</p>
                <h3>{item.description3}</h3>
              </div>
            </Box>
          ))}
        </div>
      </Box>
    </Flex>
  );
};
