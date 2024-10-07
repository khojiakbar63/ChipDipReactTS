import React from "react";
import { Container, Section } from "../../../../components";
import { Flex, Text } from "@chakra-ui/react";
import mainInfo from "../../../../assets/images/main-info.png.png";
import './_style.scss'

export const Description: React.FC = () => {
  return (
    <Section>
      <Container>
        <Flex className="description">
          <div className="description--wrapper">
            <Text className="description--wrapper--primary"><Text className="description--wrapper--primary-title">«ЧИП и ДИП»</Text> — уникальный и самый узнаваемый
              бренд на рынке микроэлектроники. <br />
              Мы поставляем электронные компоненты,
              измерительные приборы, паяльное оборудование,
              инструменты, компоненты Arduino,
              электротехнические изделия, комплектующие для
              бытовой электроники и многое другое.</Text> 

            <Text className="description--wrapper--secondary">Обширный, регулярно обновляемый, каталог включает более
              7 000 000 наименований товаров. Интеллектуальный и удобный
              поиск товаров, различные виды доставки и способы оплаты.
              Актуальная информация о наличии товаров и сроках поставки.</Text>

            <Text className="description--wrapper--secondary">Мы доставляем заказы во все регионы России, в Беларусь,
              Казахстан, Армению и Киргизию.</Text>
          </div>
          <img className="description--image" src={mainInfo} width={965} height={538} alt="picture" />
        </Flex>
      </Container>
    </Section>
  );
};
