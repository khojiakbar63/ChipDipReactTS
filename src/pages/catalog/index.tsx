import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  Aside,
  Container,
  TopActions,
  Products,
  CatalogPagination,
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
        <Spacer className="h-20" />
        <Flex gap={'28px'}>
          <Aside />
          <Products />
        </Flex>
        <Spacer className="h-23" />
        <CatalogPagination />
        <Spacer className="h-23" />
      </Container>
    </div>
  );
};
