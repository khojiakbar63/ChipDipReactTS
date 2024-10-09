import React from "react";
import { Container } from "../../../components";
import { FooterBottom, Contacts, Lists } from "./footer-components";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
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


import "./_style.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Box className="main-f-wrapper">
          
          <Flex className="footer--f-wrapper">
            <Lists/>
            <Contacts />
          </Flex>

          <Flex className="f-wrapper">
            <Box className="f-wrapper--left">
              <Text className="f-wrapper--left-title">Принимаем к оплате</Text>
              <Flex className="f-wrapper--left--icons">
                <Image src={Visa} alt="visa" />
                <Image src={TwoCircle} alt="two-circle" />
                <Image src={Maestro} alt="maestro" />
                <Image src={Mir} alt="mir" />
                <Image src={Sbp} alt="sbp" />
                <Image src={Sberbank} alt="sberbank" />
                <Image src={Xalva} alt="xalva" />
              </Flex>
            </Box>

            <Box className="f-wrapper-right">
              <Text className="f-wrapper--right-title">CHIPDIP в соцсетях</Text>
              <Flex className="f-wrapper--right--icons">
                <Link className="f-wrapper--right-icon" to={"#"}>
                  <Image src={VK} alt="vk" />
                </Link>
                <Link className="f-wrapper--right-icon" to={"#"}>
                  <Image src={YouTube} alt="youtube" />
                </Link>
                <Link className="f-wrapper--right-icon" to={"#"}>
                  <Image src={Telegram} alt="tg" />
                </Link>
                <Link className="f-wrapper--right-icon" to={"#"}>
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
