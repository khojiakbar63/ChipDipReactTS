import React from "react";
import { Container, Section } from "../../..";
import { Button } from "@chakra-ui/react";
import './_style.scss'

export const Application: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className="aplication">
          <div className="text">
            <h1>Стать партнером</h1>
            <p>Приглашаем к сотрудничеству <br />
              производителей и дистрибьюторов</p>
          </div>

          <Button colorScheme='blue' w={234} h={42} rounded={20}>Подать заявку</Button>

        </div>
      </Container>
    </Section>
  );
};
