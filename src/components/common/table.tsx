import React from "react";
import { IBikePartsData } from "@data/data";
import {
  brakesWeightAtom,
  cassWeightAtom,
  chainWeightAtom,
  cranksWeightAtom,
  frontdWeightAtom,
  reardWeightAtom,
  shifterWeightAtom,
} from "@store/atom";
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

  const copyHeadData = [...headData];
  copyHeadData[0] = partsType;

  const handlePartsClick = (weight: number, data: any, id: number) => {
    const key = getKeyByValue(data, weight);

    if (key === "shifters") setShiterWeight({ id, weight });
    if (key === "rearD") setReardWeight({ id, weight });
    if (key === "frontD") setFrontdWeight({ id, weight });
    if (key === "cranks") setCranksWeight({ id, weight });
    if (key === "cass") setCassWeight({ id, weight });
    if (key === "chain") setChainWeight({ id, weight });
    if (key === "brakes") setBrakesWeight({ id, weight });
  };

  return (
    <Wrapper>
      <TableHead>
        {copyHeadData.map((data, i) => {
          return <HeadBox key={i}>{data}</HeadBox>;
        })}
      </TableHead>

      <TableContent>
        {partsData.map((data) => {
          return (
            <ContentColumn key={data.name}>
              <ContentColumnBox style={{ backgroundColor: "#fff" }}>
                {data.name}
              </ContentColumnBox>
              <ContentColumnBox
                onClick={() => {
                  handlePartsClick(data.shifters, data, data.id);
                }}
                weight={shifterWeight.id}
                id={data.id}
              >
                {data.shifters}
              </ContentColumnBox>

              <ContentColumnBox
                onClick={() => {
                  handlePartsClick(data.rearD, data, data.id);
                }}
                weight={reardWeight.id}
                id={data.id}
              >
                {data.rearD}
              </ContentColumnBox>

              <ContentColumnBox
                onClick={() => {
                  handlePartsClick(data.frontD, data, data.id);
                }}
                weight={frontdWeight.id}
                id={data.id}
              >
                {data.frontD}
              </ContentColumnBox>

              <ContentColumnBox
                onClick={() => {
                  handlePartsClick(data.cranks, data, data.id);
                }}
                weight={cranksWeight.id}
                id={data.id}
              >
                {data.cranks}
              </ContentColumnBox>
              <ContentColumnBox
                onClick={() => {
                  handlePartsClick(data.cass, data, data.id);
                }}
                weight={cassWeight.id}
                id={data.id}
              >
                {data.cass}
              </ContentColumnBox>
              <ContentColumnBox
                onClick={() => {
                  handlePartsClick(data.chain, data, data.id);
                }}
                weight={chainWeight.id}
                id={data.id}
              >
                {data.chain}
              </ContentColumnBox>
              <ContentColumnBox
                onClick={() => {
                  handlePartsClick(data.brakes, data, data.id);
                }}
                weight={brakesWeight.id}
                id={data.id}
              >
                {data.brakes}
              </ContentColumnBox>
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
  weight?: number;
  id?: any;
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
      props.id === props.weight ? "blue" : "#fff"};
  }
  :last-child {
    background-color: #fff;
  }

  cursor: pointer;
`;
