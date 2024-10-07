import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  Aside,
  Container,
  TopActions,
  Products,
  Pagination,
  Spacer,
} from "../../components";
import { Breadcrump } from "../../components/sections/catalog/breadcrump";
import "./_style.scss";

export const Catalog: React.FC = () => {
  return (
    <div>
      <Container>
      <Spacer className="h-14" />
        <Breadcrump />
        <Spacer className="h-23" />
        <TopActions />
        <Spacer className="h-23" />
        <Flex>
          <Aside />
          <Products />
        </Flex>
        <Spacer className="h-23" />
        <Pagination />
        <Spacer className="h-23" />
      </Container>
    </div>
  );
};
