import React from "react";
import { MainText } from "styles/text";
import {
  HeaderContainer,
  HeaderImg,
  CompanyIcon,
  CompanyName,
  Profile,
  Divider,
} from "./style";

function Header() {
  return (
    <HeaderContainer>
      <HeaderImg />
      <Profile>
        <CompanyIcon />
        <CompanyName>A 가공 업체</CompanyName>
        <Divider />
        <MainText>로그아웃</MainText>
      </Profile>
    </HeaderContainer>
  );
}

export default Header;
