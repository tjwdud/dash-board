import React, { useState } from "react";
import useRequest from "hooks/useRequest";
import { TitleText, Text16, Text14 } from "styles/text";
import DropBox from "components/DropBox";
import Tooltip from "components/Tooltip";
import ResetBtn from "components/ResetBtn";
import Card from "components/Card";
import {
  DashBoardContainer,
  CardContainer,
  FilterContainer,
  DropBoxWrapper,
  InConsultationTooltipWrapper,
  EmptyRequestWrapper,
  EmptyRequestText,
} from "./style";

function DashBoard() {
  const [isConsultationChecked, setIsisConsultationChecked] = useState(false);
  const [checkedProcessingMethod, setCheckedProcessingMethod] = React.useState<
    string[]
  >([]);
  const [checkedMaterial, setCheckedMaterial] = React.useState<string[]>([]);
  const { requests, filterList } = useRequest(
    isConsultationChecked,
    checkedProcessingMethod,
    checkedMaterial,
  );
  const resetActive =
    (filterList.length > 0 && !filterList.includes("상담중")) ||
    (filterList.includes("상담중") && filterList.length > 1);

  const toggleHandler = () => {
    setIsisConsultationChecked(
      (isConsultationChecked) => !isConsultationChecked,
    );
  };

  const resetHandler = () => {
    if (resetActive) {
      setCheckedProcessingMethod([]);
      setCheckedMaterial([]);
    }
  };

  const dropBox = [
    {
      title: "가공방식",
      menus: [
        { id: 0, name: "밀링" },
        { id: 1, name: "선반" },
      ],
      dropState: checkedProcessingMethod,
      setDropState: setCheckedProcessingMethod,
    },
    {
      title: "재료",
      menus: [
        { id: 0, name: "알루미늄" },
        { id: 1, name: "탄소강" },
        { id: 2, name: "구리" },
        { id: 3, name: "합금강" },
        { id: 4, name: "강철" },
      ],

      dropState: checkedMaterial,
      setDropState: setCheckedMaterial,
    },
  ];

  return (
    <div>
      <DashBoardContainer>
        <TitleText>들어온 요청</TitleText>
        <Text16>파트너님에게 딱 맞는 요청서를 찾아보세요.</Text16>
        <FilterContainer>
          <DropBoxWrapper>
            <DropBox content={dropBox[0]} />
            <DropBox content={dropBox[1]} />
            {resetActive && <ResetBtn onClick={() => resetHandler()} />}
          </DropBoxWrapper>
          <InConsultationTooltipWrapper>
            <Tooltip onChange={() => toggleHandler()} />
            <Text14>상담 중인 요청만 보기</Text14>
          </InConsultationTooltipWrapper>
        </FilterContainer>
        {requests.length === 0 ? (
          <EmptyRequestWrapper>
            <EmptyRequestText>
              조건에 맞는 견적 요청이 없습니다.
            </EmptyRequestText>
          </EmptyRequestWrapper>
        ) : (
          <CardContainer>
            {requests?.map((request) => (
              <Card
                id={request.id}
                key={`${request.id}-${request.title}`}
                title={request.title}
                client={request.client}
                count={request.count}
                due={request.due}
                amount={request.amount}
                material={request.material}
                method={request.method}
                status={request.status}
              />
            ))}
          </CardContainer>
        )}
      </DashBoardContainer>
    </div>
  );
}

export default DashBoard;
