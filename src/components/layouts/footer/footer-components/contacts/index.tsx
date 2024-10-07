import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import GooglePlay from "../../../../../assets/icons/google-play.svg";
import AppStore from "../../../../../assets/icons/appstore.svg";
import RuStore from "../../../../../assets/icons/rustore.svg";
import AppGallary from "../../../../../assets/icons/apple-gallary.svg";
import { Link } from "react-router-dom";
import "./_style.scss";

export const Contacts: React.FC = () => {
  return (
    <Flex className="contacts">
      <Link className="contacts-call" to={"tel:+7 495 544-00-08"}>
        +7 495 544-00-08
      </Link>
      <Flex>
        <Text className="contacts--mail-title">e-mail:</Text>
        <Link className="contacts--mail-link" to={"mailto:sales@chipdip.ru"}>
          sales@chipdip.ru
        </Link>
      </Flex>
      <Text className="contacts--stores-title">
        Скачайте мобильное приложение
      </Text>
      <Flex className="contacts--stores">
        <Link className="contacts--stores-store" to={"#"}>
          <Image src={GooglePlay} alt="app-store" />
        </Link>
        <Link className="contacts--stores-store" to={"#"}>
          <Image src={AppStore} alt="app-store" />
        </Link>
        <Link className="contacts--stores-store" to={"#"}>
          <Image src={RuStore} alt="ru-store" />
        </Link>
        <Link className="contacts--stores-store" to={"#"}>
          <Image src={AppGallary} alt="app-galary" />
        </Link>
      </Flex>
    </Flex>
  );
};
