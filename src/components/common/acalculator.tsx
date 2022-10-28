import React from "react";
import styled from "styled-components";
import Button from "@components/common/button";
import { useRecoilState, useResetRecoilState } from "recoil";
import { partsTotalWeightAtom } from "@store/atom";

export default function Acalculator() {
  const [partsTotalWeight, setPartsTotalWeight] =
    useRecoilState(partsTotalWeightAtom);
  const resetPartsWeight = useResetRecoilState(partsTotalWeightAtom);

  const handleWeightResetClick = () => {
    resetPartsWeight();
  };

  const handleWeightAddClick = () => {
    setPartsTotalWeight(partsTotalWeight + 1);
  };

  return (
    <UlWrapper>
      <Li>
        <PartsWeightBox>{partsTotalWeight}</PartsWeightBox>
      </Li>
      <Li>
        <Button content="계산" clickFunc={handleWeightAddClick} />
      </Li>
      <Li>
        <Button content="초기화" clickFunc={handleWeightResetClick} />
      </Li>
    </UlWrapper>
  );
}

const UlWrapper = styled.ul`
  display: inline-flex;
  list-style: none;
  margin-top: 50px;
`;

const Li = styled.li`
  margin-right: 15px;
`;

const PartsWeightBox = styled.div`
  width: 130px;
  height: 40px;
  background-color: pink;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
