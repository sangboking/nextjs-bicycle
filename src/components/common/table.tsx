import { IBikePartsData } from "@data/data";
import {
  brakesWeightAtom,
  cassWeightAtom,
  chainWeightAtom,
  cranksWeightAtom,
  frontdWeightAtom,
  reardWeightAtom,
  shifterWeightAtom,
  totalWeightAtom,
} from "@store/atom";
import React from "react";
import { useRecoilState } from "recoil";
import { getKeyByValue } from "@utils/funcs";
import styled from "styled-components";

interface PropsType {
  headData: string[];
  partsType: string;
  partsData: IBikePartsData[];
}

export default function Table({ headData, partsType, partsData }: PropsType) {
  const [shifterWeight, setShiterWeight] = useRecoilState(shifterWeightAtom);
  const [reardWeight, setReardWeight] = useRecoilState(reardWeightAtom);
  const [frontdWeight, setFrontdWeight] = useRecoilState(frontdWeightAtom);
  const [cranksWeight, setCranksWeight] = useRecoilState(cranksWeightAtom);
  const [cassWeight, setCassWeight] = useRecoilState(cassWeightAtom);
  const [chainWeight, setChainWeight] = useRecoilState(chainWeightAtom);
  const [brakesWeight, setBrakesWeight] = useRecoilState(brakesWeightAtom);
  const [totalWeight, setTotalWeight] = useRecoilState(totalWeightAtom);

  const copyHeadData = [...headData];
  copyHeadData[0] = partsType;

  const handlePartsClick = (weight: number, data: any, i: number) => {
    const key = getKeyByValue(data, weight);

    if (key === "shifters") setShiterWeight(i);
    if (key === "rearD") setReardWeight(weight);
    if (key === "frontD") setFrontdWeight(weight);
    if (key === "cranks") setCranksWeight(weight);
  };

  return (
    <Wrapper>
      <TableHead>
        {copyHeadData.map((data, i) => {
          return <HeadBox key={i}>{data}</HeadBox>;
        })}
      </TableHead>

      <TableContent>
        {partsData.map((data, i) => {
          return (
            <ContentColumn key={data.name}>
              <ContentColumnBox style={{ backgroundColor: "#fff" }}>
                {data.name}
              </ContentColumnBox>
              <ContentColumnBox
                onClick={() => {
                  handlePartsClick(data.shifters, data, i);
                }}
                partsWeight={data.shifters}
                weight={shifterWeight}
                index={i}
              >
                {data.shifters}
              </ContentColumnBox>

              <ContentColumnBox
                onClick={() => {
                  handlePartsClick(data.rearD, data, i);
                }}
                partsWeight={data.rearD}
                weight={reardWeight}
              >
                {data.rearD}
              </ContentColumnBox>

              <ContentColumnBox
                onClick={() => {
                  handlePartsClick(data.frontD, data, i);
                }}
                partsWeight={data.frontD}
                weight={frontdWeight}
              >
                {data.frontD}
              </ContentColumnBox>

              <ContentColumnBox
                onClick={() => {
                  handlePartsClick(data.cranks, data, i);
                }}
                partsWeight={data.cranks}
                weight={cranksWeight}
              >
                {data.cranks}
              </ContentColumnBox>
              <ContentColumnBox>{data.cass}</ContentColumnBox>
              <ContentColumnBox>{data.chain}</ContentColumnBox>
              <ContentColumnBox>{data.brakes}</ContentColumnBox>
              <ContentColumnBox>{data.total}</ContentColumnBox>
            </ContentColumn>
          );
        })}
      </TableContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
`;

const TableHead = styled.section`
  height: 45px;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
`;

const HeadBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  border-top: 1px solid #eaeaea;
  text-align: center;
  :first-child {
    border-left: 1px solid #eaeaea;
  }
`;

const TableContent = styled.section``;

const ContentColumn = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #eaeaea;
  border-left: 1px solid #eaeaea;
`;

const ContentColumnBox = styled.div<{
  partsWeight?: number;
  weight?: number | null;
  index?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 2.07rem;
  border-right: 1px solid #eaeaea;
  :nth-child(n) {
    font-size: 0.8rem;
    background-color: ${(props) =>
      props.index === props.weight ? "blue" : "#fff"};
  }

  cursor: pointer;
`;
