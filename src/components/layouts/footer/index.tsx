import React from "react";
import { Container } from "../../../components";
import { FooterBottom, Contacts, Lists } from "./footer-components";
import { Box, Flex, Image, List, ListItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Visa from "../../../assets/icons/visa.svg";
import TwoCircle from "../../../assets/icons/two-circle.svg";
import Maestro from "../../../assets/icons/maestro.svg";
import Mir from "../../../assets/icons/mir.svg";
import Sbp from "../../../assets/icons/sbp.svg";
import Sberbank from "../../../assets/icons/sb.svg";
import Xalva from "../../../assets/icons/xalva.svg";
import VK from "../../../assets/icons/vk.svg";
import YouTube from "../../../assets/icons/youtube.svg";
import Telegram from "../../../assets/icons/tg.svg";
import R from "../../../assets/icons/r.svg";
import Yandeks from "../../../assets/icons/yandeks.svg";

import "./_style.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Box className="main-wrapper">
          
          <Flex className="footer--wrapper">
            <Lists/>
            <Contacts />
          </Flex>

          <Flex className="wrapper">
            <Box className="wrapper--left">
              <Text className="wrapper--left-title">Принимаем к оплате</Text>
              <Flex className="wrapper--left--icons">
                <Image src={Visa} alt="visa" />
                <Image src={TwoCircle} alt="two-circle" />
                <Image src={Maestro} alt="maestro" />
                <Image src={Mir} alt="mir" />
                <Image src={Sbp} alt="sbp" />
                <Image src={Sberbank} alt="sberbank" />
                <Image src={Xalva} alt="xalva" />
              </Flex>
            </Box>

            <Box className="wrapper-right">
              <Text className="wrapper--right-title">CHIPDIP в соцсетях</Text>
              <Flex className="wrapper--right--icons">
                <Link className="wrapper--right-icon" to={"#"}>
                  <Image src={VK} alt="vk" />
                </Link>
                <Link className="wrapper--right-icon" to={"#"}>
                  <Image src={YouTube} alt="youtube" />
                </Link>
                <Link className="wrapper--right-icon" to={"#"}>
                  <Image src={Telegram} alt="tg" />
                </Link>
                <Link className="wrapper--right-icon" to={"#"}>
                  <Image src={R} alt="r" />
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <FooterBottom />
      </Container>
    </footer>
  );
};
