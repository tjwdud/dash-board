import React from "react";
import { Wrapper, Circle } from "./style";

export interface Props {
  isChecked: boolean;
  onChange(): void;
}
function Tooltip({ isChecked, onChange }: Props) {
  return (
    <Wrapper>
      <input type="checkbox" onChange={onChange} />
      <Circle />
    </Wrapper>
  );
}

export default Tooltip;
