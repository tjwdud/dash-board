import styled from "styled-components";

export const MainText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 20px;
  align-items: center;
`;

export const TitleText = styled.p`
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.fontColor};
`;
