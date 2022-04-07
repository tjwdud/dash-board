import styled from "styled-components";
import { Text12 } from "styles/text";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.yellowColor};
  border-radius: 12px;

  width: 50px;
  height: 24px;
  padding: 2px 8px;
`;
export const Text = styled(Text12)`
  color: ${({ theme }) => theme.yellowColor};
`;
