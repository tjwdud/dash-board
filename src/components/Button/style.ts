import styled, { css } from "styled-components";
import { Text14 } from "styles/text";

interface Type {
  type: string;
}
const fillBtn = css`
  background-color: ${({ theme }) => theme.blueColor};
`;
const emptyBtn = css`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.blueColor};
`;
export const ButtonContainer = styled.div<Type>`
  border-radius: 4px;
  display: inline-block;
  height: 32px;
  padding: 6px 12px;
  cursor: pointer;
  ${(props) => (props.type === "fill" ? fillBtn : emptyBtn)}
`;

export const BtnText = styled(Text14)<Type>`
  color: ${(props) =>
    props.type === "fill" ? "white" : props.theme.blueColor};
`;
