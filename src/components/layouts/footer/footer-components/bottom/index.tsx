import React from "react";
import "./_style.scss";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Yandex from "../../../../../assets/icons/yandeks.svg";

export const FooterBottom: React.FC = () => {
  return (
    <div className="footer-bottom">
      <Box className="footer-bottom__copyright">
        <Text className="footer-bottom__copyright-text">
          © 2006—2024, АО «ЧИП и ДИП» — <br /> приборы, радиодетали и
          электронные компоненты
        </Text>
      </Box>
      <Box className="footer-bottom__links">
        <Link className="footer-bottom__links-link" to={"#"}>
          Мобильная версия
        </Link>
        <Flex className="footer-bottom__links-links">
          <Link className="footer-bottom__links-links-link" to={"#"}>
            chipdip.by
          </Link>
          <Link className="footer-bottom__links-links-link" to={"#"}>
            chipdip.kz
          </Link>
          <Link className="footer-bottom__links-links-link" to={"#"}>
            chipdip.am
          </Link>
        </Flex>
      </Box>
      <Box className="footer-bottom__policy">
        <Link className="footer-bottom__policy-link" to={"#"}>
          Политика конфиденциальности
        </Link>
        <Link className="footer-bottom__policy-link" to={"#"}>
          Пользовательское Соглашение
        </Link>
      </Box>
      <Link to={"#"}>
        <Image className="footer-bottom__yandex" src={Yandex} alt="yandex" />
      </Link>
    </div>
  );
};
