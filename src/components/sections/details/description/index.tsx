import React from "react";
import "./_style.scss";
import { Flex, Box, Image } from "@chakra-ui/react";
import { Catalog_Products } from "../../../../mocks/index";
import pdf from '../../../../assets/icons/sprite-32.svg fill.png'

export const DetailedDescription: React.FC = () => {
  const firstProduct = Catalog_Products.slice(8, 9);
  return (
    <Box className="wrapperDescription">
      <Flex className="wrapperDescription--kard">
        <h2>Описание</h2>
        {firstProduct.map((item, index) => {
          return (
            <div className="wrapperDescription--kard-items" key={index}>
              <p>IC: {item.title}</p>
              <div className="wrapperDescription--kard-items-table">
                <h2>Технические параметры</h2>
                <div className="wrapperDescription--kard-items-table-index">
                  <h3>Серия</h3>
                  <div className="wrapperDescription--kard-items-table-index-result">
                    <h4>{item.series}</h4><input type="checkbox" />
                  </div>
                </div>
                <div className="wrapperDescription--kard-items-table-index">
                  <h3>Наличие изоляции выхода</h3>
                  <div className="wrapperDescription--kard-items-table-index-result">
                    <h4>{item.output}</h4><input type="checkbox" />
                  </div>
                </div>
                <div className="wrapperDescription--kard-items-table-index">
                  <h3>Наличие внутреннего коммутатора</h3>
                  <div className="wrapperDescription--kard-items-table-index-result">
                    <h4>{item.switch}</h4><input type="checkbox" />
                  </div>
                </div>
                <div className="wrapperDescription--kard-items-table-index">
                  <h3>Максимальное напряжение силового ключа, В</h3>
                  <div className="wrapperDescription--kard-items-table-index-result">
                    <h4>{item.max_volt}</h4><input type="checkbox" />
                  </div>
                </div>
                <div className="wrapperDescription--kard-items-table-index">
                  <h3>Номинальная мощность, Вт</h3>
                  <div className="wrapperDescription--kard-items-table-index-result">
                    <h4>{item.nom_power}</h4><input type="checkbox" />
                  </div>
                </div>
                <div className="wrapperDescription--kard-items-table-index">
                  <h3>Максимальная частота преобразователя, кГц</h3>
                  <div className="wrapperDescription--kard-items-table-index-result">
                    <h4>{item.max_converter}</h4><input type="checkbox" />
                  </div>
                </div>
                <div className="wrapperDescription--kard-items-table-index">
                  <h3>Максимальная скважность преобразователя, %</h3>
                  <div className="wrapperDescription--kard-items-table-index-result">
                    <h4>{item.max_duty}</h4><input type="checkbox" />
                  </div>
                </div>
                <div className="wrapperDescription--kard-items-table-index">
                  <h3>Рабочая температура,°С</h3>
                  <div className="wrapperDescription--kard-items-table-index-result">
                    <h4>{item.operating_temp}</h4><input type="checkbox" />
                  </div>
                </div>
                <div className="wrapperDescription--kard-items-table-index">
                  <h3>Корпус</h3>
                  <div className="wrapperDescription--kard-items-table-index-result">
                    <h4>{item.corpus}</h4><input type="checkbox" />
                  </div>
                </div>
                <div className="wrapperDescription--kard-items-table-index">
                  <h3>Вес, г</h3>
                  <div className="wrapperDescription--kard-items-table-index-result">
                    <h4>{item.id}</h4><input type="checkbox" />
                  </div>
                </div>
              </div>
              <div className="wrapperDescription--kard-items-btn">
                <button>Показать похожие</button>
              </div>
              <div className="wrapperDescription--kard-items-bottom">
                <h2>Техническая документация</h2>
                <div className="wrapperDescription--kard-items-bottom-pdf">
                  <a href="/path/to/your/file.pdf" target="_blank" rel="noopener noreferrer">
                    <Image src={pdf} alt="Open PDF" />
                  </a>
                    <span>PDF</span>
                    <a href="">
                      <p>Datasheet FS7M0880_series <br />pdf, 282 КБ</p>
                    </a>
                </div>
                <h2>Дополнительная информация</h2>
                <p>
                  <a href="">
                  Калькуляторы группы «AC-DC Преобразователи, Off-Line коммутаторы» <br />
                  Типы корпусов импортных микросхем
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </Flex>
    </Box>
  );
};
