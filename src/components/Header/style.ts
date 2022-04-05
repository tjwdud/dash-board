import styled from "styled-components";
import { ReactComponent as logo } from "assets/icon/logo.svg";
import { ReactComponent as company } from "assets/icon/company.svg";
import { ReactComponent as divider } from "assets/icon/divider.svg";

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.mainColor};
  color: white;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`;

export const HeaderImg = styled(logo)`
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 40px;
`;

export const Profile = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-right: 40px;

  align-items: center;
`;
export const CompanyIcon = styled(company)`
  height: 15px;
  //   margin-top: 27.5px;
  //   margin-bottom: 27.5px;
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
