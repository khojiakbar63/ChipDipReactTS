import React from "react";
import { Box, Image, List, ListItem } from "@chakra-ui/react";
import Calculator from "../../../../../assets/icons/calculator.svg";
import { Link } from "react-router-dom";
import "./_style.scss";

export const Top: React.FC = () => {
  return (
    <Box className="top">
      <List className="top--list">
        <ListItem className="top--list-item">
          <Link to={"tel:+74955440008"}>+7 495 544-00-08</Link>
        </ListItem>
        <ListItem>
          <Link className="top--list-item-btn" to={"#"}>
            CHIPDIP организациям
          </Link>
        </ListItem>
        <ListItem className="top--list-item">
          <Link to={"#"}>Способы доставки</Link>
        </ListItem>
        <ListItem className="top--list-item">
          <Link to={"#"}>Способы оплаты</Link>
        </ListItem>
      </List>

      <Box className="top--calc">
        <Image className="top--calc-img" src={Calculator} alt="calculator" />
        <Link to={"#"} className="top--calc-text">
          Калькуляторы
        </Link>
      </Box>
    </Box>
  );
};
