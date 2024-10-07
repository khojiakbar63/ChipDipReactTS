import React from "react";
import { Container, Spacer, DetailBreadcrump, DetailedProduct, DetailedDescription, WithLikeProduct, Recommendation } from "../../components";
import { Image } from "@chakra-ui/react";
import DetailBanner from "../../assets/images/detail-banner.png";
import "./_style.scss";

export const Details: React.FC = () => {
  return (
    <div>
      <Container>
        <Spacer className="h-30" />
        <Image src={DetailBanner} alt="banner" />
        <Spacer className="h-23" />
        <DetailBreadcrump/>
        <Spacer className="h-21" />
        <DetailedProduct />
        <Spacer className="h-23" />
        <DetailedDescription />
        <Spacer className="h-23" />
        <WithLikeProduct />
        <Spacer className="h-23" />
        <Recommendation />
        <Spacer className="h-23" />
      </Container>
    </div>
  );
};
