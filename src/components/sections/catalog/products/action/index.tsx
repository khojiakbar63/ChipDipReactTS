import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { TfiMinus } from "react-icons/tfi";
import { AiOutlinePlus } from "react-icons/ai";
import "./_style.scss";

export const Actions: React.FC = () => {
  // Make counter
  const [counter, setCounter] = useState(0);
  const handleCounter = (action: string) => {
    if (action === "plus") {
      setCounter(counter + 1);
    } else if (action === "minus") {
      setCounter(counter - 1);
    }
  };

  return (
    <Box className="wrapper">
      <Flex gap={"19.05px"}>
        <Box className="wrapper--total">
          <Box className="wrapper--total-price">
            <Text className="wrapper--total-price-number">620</Text>
            <sub className="wrapper--total-price-currency">
              {" "}
              ру <br /> б.
            </sub>
          </Box>
          <MdClose />
          <Box className="wrapper--total-counter">
            <Flex className="wrapper--total-counter--wrapper">
              <button
                onClick={() => handleCounter("minus")}
                className="wrapper--total-counter--wrapper-minus"
              >
                <TfiMinus />
              </button>
              <Text className="wrapper--total-counter--wrapper-indicator">
                {counter}
              </Text>
              <button
                onClick={() => handleCounter("plus")}
                className="wrapper--total-counter--wrapper-plus"
              >
                <AiOutlinePlus />
              </button>
            </Flex>
          </Box>
        </Box>

        <button className="wrapper--cart_btn">В корзину</button>
      </Flex>
      <Box className="wrapper--wrapper">
        <span className="wrapper--wrapper-info">от 5 шт. — 569</span>
        <sub className="wrapper--wrapper-sub"> руб.</sub>
      </Box>
    </Box>
  );
};
