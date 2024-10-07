import React from "react";
import { Image } from "@chakra-ui/react";
import {
  Container,
  Spacer,
  ConsumablesBreadcrump,
  ConsumablesConsumables,
  ConsumablesDescription,
  ConsumablesRecommendation,
} from "../../components";
import Banner from "../../assets/images/consumables.png";
import "./_style.scss";

export const Consumables: React.FC = () => {
  return (
    <Container>
      <Spacer className="h-23" />
      <Image src={Banner} alt="banner" />
      <Spacer className="h-23" />
      <ConsumablesBreadcrump />
      <Spacer className="h-23" />
      <ConsumablesConsumables />
      <Spacer className="h-23" />
      <ConsumablesDescription />
      <Spacer className="h-23" />
      <ConsumablesRecommendation />
      <Spacer className="h-23" />
    </Container>
  );
};
