import React from "react";
import "./_style.scss";
import { Flex, List, ListItem } from "@chakra-ui/react";

export const Top: React.FC = () => {
  return (
    <>
      <Flex>
        <List>
          <ListItem>+7 495 544-00-08</ListItem>
          <ListItem>CHIPDIP организациям</ListItem>
          <ListItem>Способы доставки</ListItem>
          <ListItem>Способы оплаты</ListItem>
        </List>
      </Flex>
    </>
  );
};
