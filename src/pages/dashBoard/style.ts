import styled from "styled-components";
import { Text14 } from "styles/text";

export const DashBoardContainer = styled.div`
  // margin-left: 55px;
  // margin-right: 55px;
  margin-left: auto;
  margin-right: auto;
  // display: flex;
  margin-top: 40px;
  width: 90%;
  justify-content: center;
  align-items: center;
  & > :nth-child(1) {
    margin-top: 24px;
  }
  @media screen and (max-width: 1240px) {
    width: 75vw;
  }
  @media screen and (max-width: 979px) {
    width: 85vw;
  }
  @media screen and (max-width: 857px) {
    width: 95vw;
  }
  @media screen and (max-width: 777px) {
    width: 75vw;
  }
  @media screen and (max-width: 400px) {
    width: 90vw;
  }
`;

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 32px;
  @media screen and (max-width: 527px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DropBoxWrapper = styled.div`
  display: flex;
  & > :nth-child(n + 2) {
    margin-left: 8px;
  }
`;
export const InConsultationTooltipWrapper = styled.div`
  display: flex;
  & > :nth-child(2) {
    margin-left: 16px;
  }
  align-items: center;
  @media screen and (max-width: 527px) {
    margin-top: 20px;
  }
`;
export const CardContainer = styled.div`
  display: grid;
  // background-color: yellow;
  min-height: 820px;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 16px;
  @media screen and (max-width: 1240px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // @media (min-width: 825px) and (max-width: 991px) {
  //   grid-template-columns: repeat(2, 1fr);
  // }

  // @media screen and (max-width: 600px) {
  //   grid-template-columns: repeat(2, 1fr);
  // }

  @media screen and (max-width: 777px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const EmptyRequestWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.grayColor};
  border-radius: 4px;
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

export const EmptyRequestText = styled(Text14)`
  font-weight: 400;
  color: ${({ theme }) => theme.lightGray};
`;
