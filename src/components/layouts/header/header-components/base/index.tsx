import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import Logo from "../../../../../../public/vite.svg";
import Location from "../../../../../assets/icons/location.svg";
import User from "../../../../../assets/icons/user.svg";
import Order from "../../../../../assets/icons/order.svg";
import Bom from "../../../../../assets/icons/bom.svg";
import Cart from "../../../../../assets/icons/cart.svg";

import "./_style.scss";

export const Base: React.FC = () => {
  return (
    <Box className="base">
      <Flex className="base--left" gap={"32px"} alignItems={"center"}>
        <NavLink to={'/'}>
           <Image className="base--left-logo" src={Logo} alt="Logo" />
        </NavLink>
        <Box className="base--left--wrapper">
          <Flex className="base--left--wrapper--location">
            <Image
              className="base--left--wrapper--location-img"
              src={Location}
              alt="location"
            />
            <Link className="base--left--wrapper--location-link" to={"#"}>
              Россия
            </Link>
          </Flex>
          <p className="base--left--wrapper-text">Магазины и оптовые отделы</p>
        </Box>
      </Flex>

      <Flex className="base--right">
        <Box className="base--right--wrapper">
          <Image src={User} alt="User" />
          <Text className="base--right--wrapper-text">Вход</Text>
        </Box>
        <NavLink to={'/details'} className="base--right--wrapper">
          <Image src={Order} alt="Order" />
          <Text className="base--right--wrapper-text">Статус заказа</Text>
        </NavLink>
        <NavLink to={'/catalog'} className="base--right--wrapper">
          <Image src={Bom} alt="Bom" />
          <Text className="base--right--wrapper-text">BOM</Text>
        </NavLink>
        <NavLink to={'/consumables'} className="base--right--wrapper">
          <Text className="counter">0</Text>
          <Image src={Cart} alt="Cart" />
          <Text className="base--right--wrapper-text">Корзина</Text>
        </NavLink>
      </Flex>
    </Box>
  );
};
