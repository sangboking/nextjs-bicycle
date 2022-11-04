import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "@components/common/button";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import {
  brakesWeightAtom,
  cassWeightAtom,
  chainWeightAtom,
  cranksWeightAtom,
  frontdWeightAtom,
  partsTotalWeightAtom,
  reardWeightAtom,
  shifterWeightAtom,
  tabStateAtom,
} from "@store/atom";

export default function Calculator() {
  const [partsTotalWeight, setPartsTotalWeight] =
    useRecoilState(partsTotalWeightAtom);
  const resetPartsTotalWeight = useResetRecoilState(partsTotalWeightAtom);
  const resetShifterWeight = useResetRecoilState(shifterWeightAtom);
  const resetReardWeight = useResetRecoilState(reardWeightAtom);
  const resetFrontdWeight = useResetRecoilState(frontdWeightAtom);
  const resetCranksWeight = useResetRecoilState(cranksWeightAtom);
  const resetCassWeight = useResetRecoilState(cassWeightAtom);
  const resetChainWeight = useResetRecoilState(chainWeightAtom);
  const resetBrakesWeight = useResetRecoilState(brakesWeightAtom);
  const shifterWeight = useRecoilValue(shifterWeightAtom);
  const rearDWeight = useRecoilValue(reardWeightAtom);
  const frontDWeight = useRecoilValue(frontdWeightAtom);
  const cranksWeight = useRecoilValue(cranksWeightAtom);
  const cassWeight = useRecoilValue(cassWeightAtom);
  const chainWeight = useRecoilValue(chainWeightAtom);
  const brakesWeight = useRecoilValue(brakesWeightAtom);
  const tabState = useRecoilValue(tabStateAtom);

  const handleWeightResetClick = () => {
    resetPartsTotalWeight();
    resetShifterWeight();
    resetReardWeight();
    resetFrontdWeight();
    resetCranksWeight();
    resetCassWeight();
    resetChainWeight();
    resetBrakesWeight();
  };

  const handleWeightAddClick = () => {
    setPartsTotalWeight(
      shifterWeight.weight +
        rearDWeight.weight +
        frontDWeight.weight +
        cranksWeight.weight +
        cassWeight.weight +
        chainWeight.weight +
        brakesWeight.weight
    );
  };

  useEffect(() => {
    resetPartsTotalWeight();
    resetShifterWeight();
    resetReardWeight();
    resetFrontdWeight();
    resetCranksWeight();
    resetCassWeight();
    resetChainWeight();
    resetBrakesWeight();
  }, [tabState]);

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
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #eaeaea;
`;
