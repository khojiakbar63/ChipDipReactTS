import React from "react";
import {
  Box,
  FormLabel,
  Image,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import Catalog from "../../../../../assets/icons/catalog.svg";
import Search from "../../../../../assets/icons/search.svg";
import "./_style.scss";

export const Bottom: React.FC = () => {
  return (
    <Box className="bottom">
      <button className="bottom--btn">
        <Image className="bottom--btn-icon" src={Catalog} alt="catalog" />
        <Text className="bottom--btn-title">Каталог товаров</Text>
      </button>

      <InputGroup className="bottom--input--group">
        <FormLabel className="label" htmlFor="input">
          <Image className="search-icon" src={Search} alt="search" />
        </FormLabel>
        <Input
          id="input"
          className="input"
          type="search"
          placeholder="Поиск среди 9 873 190 компонентов, электроники, приборов, электрики, автозапчастей, инструментов, сантехники…"
        />
      </InputGroup>
    </Box>
  );
};
