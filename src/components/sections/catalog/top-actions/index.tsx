import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { RxShare2 } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import FX from "../../../../assets/icons/fx.svg";
import Cubes from "../../../../assets/icons/cubes.svg";
import "./_style.scss";
 
export const TopActions: React.FC = () => {
  return (
    <Box className="top_actions">
      <Flex className="top_actions--wrapper">
        <Text className="top_actions--wrapper-title">
          AC-DC Преобразователи, Off-Line коммутаторы
          <Text className="top_actions--wrapper-title-count">3573 из 3868</Text>
        </Text>
        <Flex className="top_actions--wrapper--icons">
          <Link to={"#"}>
            <Image
              className="top_actions--wrapper--icons-icon"
              src={FX}
              alt="fx"
            />
          </Link>
          <Link to={"#"}>
            <Image
              className="top_actions--wrapper--icons-icon"
              src={Cubes}
              alt="cubes"
            />
          </Link>
          <Link to={"#"}>
            <RxShare2 fontSize={26} />
          </Link>
        </Flex>
      </Flex>
      <Flex className="top_actions--btns">
        <Button className="top_actions--btns-btn" borderRadius={50}>
          LinkSwitch
        </Button>
        <Button className="top_actions--btns-btn" borderRadius={50}>
          TinySwitch
        </Button>
        <Button className="top_actions--btns-btn" borderRadius={50}>
          TOPSwitch
        </Button>
        <Button className="top_actions--btns-btn" borderRadius={50}>
          VIPer
        </Button>
      </Flex>

      <Flex justifyContent={"space-between"}>
        <Flex className="top_actions--links">
          <Text className="top_actions--links-filter">Сортировка:</Text>
          <NavLink to="#1" className="top_actions--links-link current">
            Рекомендуем
          </NavLink>
          <NavLink to="#2" className="top_actions--links-link">
            Хиты продаж
          </NavLink>
          <NavLink to="#3" className="top_actions--links-link">
            Дешевле
          </NavLink>
          <NavLink to="#4" className="top_actions--links-link">
            Дороже
          </NavLink>
          <NavLink to="#5" className="top_actions--links-link">
            Количество
          </NavLink>
        </Flex>

        <Flex className="top_actions--actions">
          <label
            className="top_actions--actions-input-wrapper"
            htmlFor="search"
          >
            <input
              id="search"
              className="top_actions--actions-input-wrapper-input"
              placeholder="Поиск в группе"
            />
            <IoMdClose className="top_actions--actions-input-wrapper-close" />
          </label>
          <button className="top_actions--actions-btn">Найти</button>
        </Flex>
      </Flex>
    </Box>
  );
};
