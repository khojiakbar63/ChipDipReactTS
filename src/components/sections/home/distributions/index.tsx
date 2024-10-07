import React from "react";
import { Container, Section } from "../../../../components";
import left from "../../../../assets/images/left.svg";
import argos from "../../../../assets/images/Аргос.svg";
import onaus from "../../../../assets/images/Ohaus.svg";
import micro from "../../../../assets/images/Micro m.svg";
import evercool from "../../../../assets/images/evercool.svg";
import bosch from "../../../../assets/images/bosch.svg";
import unit from "../../../../assets/images/uni-t.svg";
import right from "../../../../assets/images/right.svg";
import './_style.scss'
import { Flex } from "@chakra-ui/react";

export const Distributions: React.FC = () => {

  return (
    <Section>
      <Container>



        <h1 className="distribute">Дистрибьюция</h1>
        <Flex id="distribute">
          <img src={left} alt="img" />
          <Flex w={1266} justify="space-around">

        <img src={argos} alt="icon" />
        <img src={onaus} alt="icon" />
        <img src={micro} alt="icon" />
        <img src={evercool} alt="icon" />
        <img src={bosch} alt="icon" />
        <img src={unit} alt="icon" />

        </Flex>
          <img src={right} alt="img" />
        </Flex>
      </Container>
    </Section>
  );
};


