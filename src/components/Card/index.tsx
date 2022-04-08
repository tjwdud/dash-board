import React from "react";
import { Text14 } from "styles/text";
import Button from "components/Button";
import InConsultation from "components/InConsultation";
import { IRequests } from "types/requestDataType";
import {
  Container,
  Wrapper,
  TitleWrapper,
  ContentsWrapper,
  Title,
  DateText,
  Divider,
  Content,
  ContentTitle,
  ContentBody,
  ContentBodyWrapper,
  BtnWrapper,
  TitleInConsultationWrapper,
} from "./style";

function Card({
  id,
  title,
  client,
  count,
  due,
  amount,
  material,
  method,
  status,
}: IRequests) {
  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <TitleInConsultationWrapper>
            <Title>{title}</Title>
            {status === "상담중" && <InConsultation />}
          </TitleInConsultationWrapper>
          <Text14>{client}</Text14>
        </TitleWrapper>
        <DateText>{due}까지 납기</DateText>
        <Divider />
        <ContentsWrapper>
          <Content>
            <ContentTitle>도면개수</ContentTitle>
            <ContentBodyWrapper>
              <ContentBody>{count}개</ContentBody>
            </ContentBodyWrapper>
          </Content>
          <Content>
            <ContentTitle>총 수량</ContentTitle>
            <ContentBodyWrapper>
              {" "}
              <ContentBody>{amount}개</ContentBody>
            </ContentBodyWrapper>
          </Content>
          <Content>
            <ContentTitle>가공방식</ContentTitle>
            <ContentBodyWrapper>
              <ContentBody>{method.join(", ")}</ContentBody>
            </ContentBodyWrapper>
          </Content>
          <Content>
            <ContentTitle>재료</ContentTitle>
            <ContentBodyWrapper>
              <ContentBody>{material.join(", ")}</ContentBody>
            </ContentBodyWrapper>
          </Content>
        </ContentsWrapper>
        <BtnWrapper>
          <Button type="fill">요청 내역 보기</Button>
          <Button type="empty">채팅하기</Button>
        </BtnWrapper>
      </Wrapper>
    </Container>
  );
}

export default Card;
