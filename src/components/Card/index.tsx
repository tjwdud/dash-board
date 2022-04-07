import React from "react";
import { Text14 } from "styles/text";
import Button from "components/Button";
import InConsultation from "components/InConsultation";
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
  BtnWrapper,
  TitleInConsultationWrapper,
} from "./style";

function Card() {
  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <TitleInConsultationWrapper>
            <Title>자동차 시제품 제작</Title>
            <InConsultation />
          </TitleInConsultationWrapper>
          <Text14>A 고객사</Text14>
        </TitleWrapper>
        <DateText>2020.12.14까지 납기</DateText>
        <Divider />
        <ContentsWrapper>
          <Content>
            <ContentTitle>도면개수</ContentTitle>
            <ContentBody>1개</ContentBody>
          </Content>
          <Content>
            <ContentTitle>총 수량</ContentTitle>
            <ContentBody>2개</ContentBody>
          </Content>
          <Content>
            <ContentTitle>가공방식</ContentTitle>
            <ContentBody>밀링,선반</ContentBody>
          </Content>
          <Content>
            <ContentTitle>재료</ContentTitle>
            <ContentBody>밀링,선반</ContentBody>
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
