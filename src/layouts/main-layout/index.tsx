import React from "react";
import { Outlet } from "react-router";
import { Box } from "@chakra-ui/react";
import { Header, Footer, FixedChat } from "../../components";
import "./_style.scss";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Box>
        <Outlet />
      </Box>
      <FixedChat/>
      <Footer />
    </>
  );
};
