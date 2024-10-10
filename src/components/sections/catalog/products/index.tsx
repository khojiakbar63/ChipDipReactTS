import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Catalog_Products } from "../../../../mocks";
import { Actions } from "./action/index";
import "./_style.scss";

export const Products: React.FC = () => {
  return (
    <Box className="catalog">
      <Box className="catalog--products">
        {Catalog_Products.map((item) => (
          <div className="catalog--products--product" key={item.id}>
            <div className="catalog--products--product--description">
              <div className="catalog--products--product--description--text">
                <Text className="catalog--products--product--description--text--title">
                  {item.title}
                </Text>
                <Box className="catalog--products--product--description--text--context">
                  <p className="catalog--products--product--description--text--context-item">
                    Бренд:{" "}
                    <p className="catalog--products--product--description--text--context-item-info">
                      {item.brand}
                    </p>
                  </p>
                  <Text className="catalog--products--product--description--text--context-item">
                    Серия:{" "}
                    <Text className="catalog--products--product--description--text--context-item-info">
                      {item.series}
                    </Text>
                  </Text>
                  <Text className="catalog--products--product--description--text--context-item">
                    Тип преобразователя:{" "}
                    <Text className="catalog--products--product--description--text--context-item-info">
                      {item.tip}
                    </Text>
                  </Text>
                  <Text className="catalog--products--product--description--text--context-item">
                    Наличие изоляции выхода:{" "}
                    <Text className="catalog--products--product--description--text--context-item-info">
                      {item.output}
                    </Text>
                  </Text>
                  <Text className="catalog--products--product--description--text--context-item">
                    Наличие внутреннего коммутатора:{" "}
                    <Text className="catalog--products--product--description--text--context-item-info">
                      {item.switch}
                    </Text>
                  </Text>
                  <Text className="catalog--products--product--description--text--context-item">
                    Максимальное напряжение силового ключа, В:{" "}
                    <Text className="catalog--products--product--description--text--context-item-info">
                      {item.max_volt}
                    </Text>
                  </Text>
                  <Text className="catalog--products--product--description--text--context-item">
                    Номинальная мощность, Вт:{" "}
                    <Text className="catalog--products--product--description--text--context-item-info">
                      {item.nom_power}
                    </Text>
                  </Text>
                  <Text className="catalog--products--product--description--text--context-item">
                    Максимальная частота преобразователя, кГц:{" "}
                    <Text className="catalog--products--product--description--text--context-item-info">
                      {item.max_converter}
                    </Text>
                  </Text>
                  <Text className="catalog--products--product--description--text--context-item">
                    Максимальная скважность преобразователя, %:{" "}
                    <Text className="catalog--products--product--description--text--context-item-info">
                      {item.max_duty}
                    </Text>
                  </Text>
                  <Text className="catalog--products--product--description--text--context-item">
                    Рабочая температура,°С:{" "}
                    <Text className="catalog--products--product--description--text--context-item-info">
                      {item.operating_temp}
                    </Text>
                  </Text>
                  <Text className="catalog--products--product--description--text--context-item">
                    Корпус:{" "}
                    <Text className="catalog--products--product--description--text--context-item-info">
                      {item.corpus}
                    </Text>
                  </Text>
                </Box>
              </div>
            </div>

            <div className="catalog--products--product--actions">
              <Image
                src={item.image}
                className="catalog--products--product--actions-image"
              />
              <Actions />
            </div>
          </div>
        ))}
      </Box>
    </Box>
  );
};
