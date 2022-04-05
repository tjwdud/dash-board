import React from "react";
import {
  HeaderContainer,
  HeaderImg,
  CompanyIcon,
  CompanyName,
  Profile,
  Divider,
} from "./style";

import { MainText } from "../Text/style";

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
