import React, { useState } from "react";
import { Flex, Box } from '@chakra-ui/react';
import { videosData } from '../mock/mock.js'
import "./_style.scss";
export const Video: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 1; 
  const totalItems = videosData.length; 

  const handleLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + totalItems) % totalItems);
  };

  const handleRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % totalItems);
  };

  const visibleItems = videosData.slice(currentIndex, currentIndex + itemsPerPage);
  return (
    <Flex className="videos" w={872}>
      <h3>Видео</h3>
      <Box flex="1" bg="#F1F3F5" className="videosBox" py={5} px={5}>
      <div className="pagination">
          <div></div>
          <div className="paginationItem">
            <button className="handleBtn" onClick={handleLeft}><i className="bi bi-arrow-left"></i></button>
            <button className="handleBtn" onClick={handleRight}><i className="bi bi-arrow-right"></i></button>
          </div>
        </div>
        <div className="wrapperItems">
          <div className="partItems">
            {
              visibleItems.map((item, index)=>(
                <Box key={index} className="videosBox">
                  <iframe src={item.miniFirst} alt="" scrolling="no"/>
                  <div className="aboutInfo">
                    <p>{item.miniFirstHourse}</p>
                    <h3>{item.miniFirstDescription.substring(0,50)}</h3>
                  </div>
                </Box>
              ))
            }
          </div>
          <div className="trioItems">
            {
              visibleItems.map((item, index)=>(
                <Box key={index} className="videosBox">
                  <iframe src={item.bigVideo} alt="" scrolling="no"/>
                  <div className="aboutInfo">
                    <p>{item.bigHours}</p>
                    <h3>{item.bigDescription.substring(0,40)}</h3>
                  </div>
                </Box>
              ))
            }
            {
              visibleItems.map((item, index)=>(
                <Box key={index} className="videosBox">
                  <iframe src={item.miniSecond} alt="" scrolling="no"/>
                  <div className="aboutInfo">
                    <p>{item.miniSecondHours}</p>
                    <h3>{item.miniSecondDesription.substring(0,35)}</h3>
                  </div>
                </Box>
              ))
            }
          </div>
        </div>
      </Box>
    </Flex>
  );
};
