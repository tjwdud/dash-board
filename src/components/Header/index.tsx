import React, { useState, useRef, useEffect } from "react";
import { MainText } from "styles/text";
import {
  HeaderContainer,
  HeaderImg,
  CompanyIcon,
  CompanyName,
  Profile,
  Divider,
  MenuIcon,
} from "./style";
import MobileMenu from "./MobileMenu/index";

function Header() {
  const [open, setOpen] = useState(false);
  const menuHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <MenuIcon onClick={() => menuHandler()} />
      {open && <MobileMenu setOpen={setOpen} open={open} />}
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
