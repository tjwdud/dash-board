import styled from "styled-components";
import { ReactComponent as logo } from "assets/icon/logo.svg";
import { ReactComponent as company } from "assets/icon/company.svg";
import { ReactComponent as divider } from "assets/icon/divider.svg";
import { ReactComponent as Hmenu } from "assets/icon/menu.svg";

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
  color: white;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);

  @media ${({ theme }) => theme.device.mobile} {
    background-color: red;
    height: 44px;
    justify-content: start;
  }
`;

export const HeaderImg = styled(logo)`
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 40px;
  width: 153px;
  height: 20px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 91px;
    height: 12px;
    margin-left: 16px;
  }
`;
export const MenuIcon = styled(Hmenu)`
  display: none;
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
export const Profile = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-right: 40px;
  align-items: center;
  @media screen and (max-width: 455px) {
    // & > :nth-child(n + 2) {
    display: none;
    //}
  }
`;
export const CompanyIcon = styled(company)`
  height: 15px;

  margin-right: 8px;
`;

export const CompanyName = styled.p`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 20px;
  //   color: white;
`;

export const Divider = styled(divider)`
  margin-left: 32px;
  margin-right: 32px;
`;
