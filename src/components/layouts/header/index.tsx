import React from "react";
import { Container, Top, Base, Bottom } from "../../../components";
import "./_style.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Container>
        <Top/>
        <Base/>
        <Bottom/>
      </Container>
    </header>
  );
};
