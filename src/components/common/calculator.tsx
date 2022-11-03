import React from "react";
import styled from "styled-components";
import Button from "@components/common/button";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { partsTotalSelector } from "@store/atom";

export default function Calculator() {
  const partsTotal = useRecoilValue(partsTotalSelector);

  const handleWeightResetClick = () => {};

  return (
    <UlWrapper>
      <Li>
        <PartsWeightBox>{partsTotal}</PartsWeightBox>
      </Li>
      <Li>
        <Button content="계산" />
      </Li>
      <Li>
        <Button content="초기화" />
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
