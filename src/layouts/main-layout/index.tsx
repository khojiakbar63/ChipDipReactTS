import React from "react";
import { Outlet } from "react-router";
import { Header, Footer, Container } from "../../components";
import "./_style.scss";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
