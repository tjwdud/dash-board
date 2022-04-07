import styled from "styled-components";

const Text = styled.p`
  color: ${({ theme }) => theme.fontColor};
`;
export const MainText = styled.p`
  font-size: 14px;
  line-height: 20px;
  align-items: center;
`;
// 20pt - 600
export const TitleText = styled(Text)`
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
`;
// 16pt - 400
export const Text16 = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

// 14pt-500
export const Text14 = styled(Text)`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
`;

export const Text12 = styled(Text)`
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
`;
