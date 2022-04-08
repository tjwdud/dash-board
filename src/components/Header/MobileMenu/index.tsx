import React from "react";
import { Divider } from "components/Card/style";
import { Text14 } from "styles/text";
import {
  MenuContainer,
  MenuBody,
  Logo,
  MenuHeader,
  MenuListWrapper,
  MenuList,
  CompanyIcon,
} from "./style";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function MobileMenu({ open, setOpen }: Props) {
  const handleClickOutside = () => {
    setOpen(false);
  };
  return (
    <MenuContainer onClick={() => handleClickOutside()}>
      <MenuBody
        open={open}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <MenuHeader>
          <Logo />
          <Divider />
        </MenuHeader>
        <MenuListWrapper>
          <MenuList>
            <CompanyIcon />
            <Text14>파트너정밀가공</Text14>
          </MenuList>
          <MenuList>
            <Text14>로그아웃</Text14>
          </MenuList>
        </MenuListWrapper>
      </MenuBody>
    </MenuContainer>
  );
}

export default MobileMenu;
