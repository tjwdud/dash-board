import { findByLabelText } from "@testing-library/react";
import styled from "styled-components";
import { Text16, Text14 } from "styles/text";

export const Container = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  width: 366px;
  height: 356px;
`;

export const Wrapper = styled.div`
  margin: 24px 16px;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleInConsultationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;
export const Title = styled(Text16)`
  font-weight: 700;
`;

export const DateText = styled(Text14)`
  font-weight: 400;
  color: ${({ theme }) => theme.lightGray};
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const Divider = styled.hr`
  border: 1px solid #e5e5e5;
  width: 100%;
  margin: 0;
`;
export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 32px;
  & > :nth-child(n + 2) {
    margin-top: 8px;
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const ContentTitle = styled(Text14)`
  font-weight: 400;
  width: 70px;
  height: 20px;
`;

export const ContentBody = styled(Text14)`
  font-weight: 700;
  width: 232px;
  height: 20px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  & > :nth-child(2) {
    margin-left: 8px;
  }
`;
