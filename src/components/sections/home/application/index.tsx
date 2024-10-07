import React from "react";
import { Container, Section } from "../../..";
import { Button } from "@chakra-ui/react";
import './_style.scss'
import { Link } from "react-router-dom";

export const Application: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className="aplication">
          <div className="text">
            <Link to='/'><h1>Стать партнером</h1></Link>
            <Link to='/'><p>Приглашаем к сотрудничеству <br />
            производителей и дистрибьюторов</p></Link>
          </div>

          <Button colorScheme='blue' w={234} h={42} rounded={20}>Подать заявку</Button>

        </div>
      </Container>
    </Section>
  );
};
