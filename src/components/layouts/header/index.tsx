import React from "react";
import { Container, Top, Base, Bottom } from "../../../components";
import "./_style.scss";
import { Box } from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Container>
        <Top />
        <Box className="wrapper">
          <Base />
          <Bottom />
        </Box>
      </Container>
    </header>
  );
};
