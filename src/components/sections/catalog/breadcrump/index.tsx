import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image } from "@chakra-ui/react";
import B_right from "../../../../assets/icons/b-right.svg"
import "./_style.scss";


export const Breadcrump: React.FC = () => {
  return (
    <Breadcrumb separator={<Image src={B_right} />} className="bread" fontWeight="medium" fontSize="sm">
      <BreadcrumbItem className="bread--item">
        <BreadcrumbLink className="bread--item-link" href="#">Главная</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem className="bread--item">
        <BreadcrumbLink className="bread--item-link" href="#">Электронные компоненты</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem className="bread--item">
        <BreadcrumbLink className="bread--item-link" href="#">Микросхемы</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem className="bread--item" isCurrentPage>
        <BreadcrumbLink className="bread--item-link" href="#">AC-DC Преобразователи, Off-Line коммутаторы</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
