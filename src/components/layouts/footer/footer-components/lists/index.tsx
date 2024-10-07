import React from "react";
import { Flex, List, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./_style.scss";

export const Lists: React.FC = () => {
  return (
    <Flex className="lists">
      <List className="lists--list">
        <ListItem className="lists--list--item">
          <Link className="lists--list--item-link_title" to={"#"}>
            Магазины и оптовые отделы
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list--item-link_title" to={"#"}>
            Видео
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list--item-link_title" to={"#"}>
            Новости
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list--item-link_title" to={"#"}>
            Каталог брендов
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list--item-link_title" to={"#"}>
            Каталоги автозапчастей
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list--item-link_title" to={"#"}>
            Акции и спецпредложения
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list--item-link_title" to={"#"}>
            Калькуляторы
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list--item-link_title" to={"#"}>
            Обратная связь
          </Link>
        </ListItem>
      </List>

      <List className="lists--list_second">
        <ListItem className="lists--list--item">
          <Link className="lists--list--item-link_title" to={"#"}>
            О компании
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list_second--item-link" to={"#"}>
            История компании
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list_second--item-link" to={"#"}>
            «ЧИП и ДИП» сегодня
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list_second--item-link" to={"#"}>
            28 лет в сфере e-com
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list_second--item-link" to={"#"}>
            Контактная информация
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list_second--item-link" to={"#"}>
            Реквизиты АО «ЧИП и ДИП»
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list_second--item-link" to={"#"}>
            Дистрибьюция
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list_second--item-link" to={"#"}>
            Планируете стать поставщиком?
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list_second--item-link" to={"#"}>
            Работа в «ЧИП и ДИП»
          </Link>
        </ListItem>
      </List>

      <List className="lists--list_second">
        <ListItem className="lists--list--item">
          <Link className="lists--list--item-link_title" to={"#"}>
            Как купить?
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list_second--item-link" to={"#"}>
            Как сделать заказ
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list_second--item-link" to={"#"}>
            Способы доставки
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list_second--item-link" to={"#"}>
            Способы оплаты
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list_second--item-link" to={"#"}>
            Плати частями
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list_second--item-link" to={"#"}>
            Состояние заказа
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list_second--item-link" to={"#"}>
            Редактирование заказа
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list_second--item-link" to={"#"}>
            Возврат и обмен товара
          </Link>
        </ListItem>
        <ListItem className="lists--list--item">
          <Link className="lists--list_second--item-link" to={"#"}>
            Для юридических лиц
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
};
