import styled from "styled-components";
import { Text12 } from "styles/text";

export const Container = styled.div`
  display: flex;
  margin-left: 24px;
`;
export const Btn = styled.button.attrs({ type: "button" })`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Text = styled(Text12)`
  color: ${({ theme }) => theme.blueColor};
  font-weight: 400px;
  margin-left: 12px;
`;
