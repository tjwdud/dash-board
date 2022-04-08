import styled from "styled-components";
import logo from "assets/icon/blue_logo.png";
import { ReactComponent as company } from "assets/icon/company.svg";

export const MenuContainer = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
  position: fixed;
  background-color: rgba(50, 61, 69, 0.5);
`;

export const MenuBody = styled.div`
  width: 280px;
  height: 100%;
  opacity: 1;
  left: 0;
  z-index: 10000;
  background-color: white;
  transform: ${({ open }: { open: boolean }) =>
    open ? "translateX(0)" : "translateX(-100%)"};
  transition: all 0.2s ease-in;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`;

export const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  margin: 16px 24px;
`;

export const MenuHeader = styled.div`
  height: 44px;
`;

export const MenuListWrapper = styled.div`
  margin-top: 36px;
  margin-left: 32px;
  & > :nth-child(2) {
    margin-top: 24px;
  }
`;

export const MenuList = styled.li`
  display: flex;
  align-items: center;
  & > :nth-child(2) {
    margin-left: 8px;
  }
`;
export const CompanyIcon = styled(company)`
  height: 15px;
  & path {
    fill: ${({ theme }) => theme.fontColor};
  }
`;
