import React from "react";
// import { btnText } from "styles/text";
import { ButtonContainer, BtnText } from "./style";

interface Props {
  children: React.ReactNode;
  type: string;
}
function Button({ children, type }: Props) {
  return (
    <ButtonContainer type={type}>
      <BtnText type={type}>{children}</BtnText>
    </ButtonContainer>
  );
}

export default Button;
