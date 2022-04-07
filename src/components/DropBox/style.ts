import styled, { css } from "styled-components";
import { ReactComponent as ArrowDropDown } from "assets/icon/arrow_drop_down.svg";
import { Text12 } from "styles/text";

interface CustomStyleProps {
  selected: boolean;
}
interface DropBoxProps {
  selected: boolean;
  fontNum: number;
}
const selectedBtn = css`
  background-color: ${({ theme }) => theme.mainColor};
  color: white;
`;
const selectedNotBtn = css`
  border: 1px solid #939fa5;
  color: white;
`;
export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const DropDown = styled.div<DropBoxProps>`
  display: flex;
  box-sizing: border-box;
  height: 32px;
  width: ${({ fontNum }) => (fontNum === 4 ? "98px" : "76px")};
  align-items: center;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
  & > :nth-child(2) {
    margin-left: 5px;
  }
  :hover {
    border: ${({ selected, theme }) =>
      selected ? "none" : `1px solid ${theme.blueColor}`};
  }
  ${({ selected }) => (selected ? selectedBtn : selectedNotBtn)};
`;

export const Arrow = styled(ArrowDropDown)<CustomStyleProps>`
  ${({ selected }) => selected && "path{fill: #ffffff;}"};
`;
export const Text = styled(Text12)<CustomStyleProps>`
  line-height: 14px;
  color: ${({ selected }) => selected && "white"};
`;
export const MenuBox = styled.div`
  background-color: white;
  width: 130px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 4px;
  position: absolute;
  top: 36px;
`;
export const MenuWrapper = styled.div`
  margin: 16px 12px;
  & > :nth-child(n + 2) {
    margin-top: 8px;
  }
`;
export const MenuItem = styled.li`
  display: flex;
  & > :nth-child(2) {
    margin-left: 10px;
  }
  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`;
