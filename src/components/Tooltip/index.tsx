import React from "react";
import { Wrapper, Circle } from "./style";

export interface Props {
  onChange(): void;
}
function Tooltip({ onChange }: Props) {
  return (
    <Wrapper>
      <input type="checkbox" onChange={onChange} />
      <Circle />
    </Wrapper>
  );
}

export default Tooltip;
