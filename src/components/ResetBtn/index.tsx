import React from "react";
import { ReactComponent as RefreshBtn } from "assets/icon/refresh_button.svg";
import { Text, Container, Btn } from "./style";

interface Props {
  onClick: () => void;
}
function ResetBtn({ onClick }: Props) {
  return (
    <Container>
      <Btn onClick={onClick}>
        <RefreshBtn />
        <Text>필터링 리셋</Text>
      </Btn>
    </Container>
  );
}

export default ResetBtn;
