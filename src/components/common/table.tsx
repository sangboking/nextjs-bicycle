import { IBikePartsData } from "data/data";
import React from "react";
import styled from "styled-components";

interface PropsType {
  headData: string[];
  partsType: string;
  partsData: IBikePartsData[];
}

export default function Table({ headData, partsType, partsData }: PropsType) {
  const copyHeadData = [...headData];
  copyHeadData[0] = partsType;
  console.log(partsData);

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
              <ContentColumnBox>{data.name}</ContentColumnBox>
              <ContentColumnBox>{data.shifters}</ContentColumnBox>
              <ContentColumnBox>{data.rearD}</ContentColumnBox>
              <ContentColumnBox>{data.frontD}</ContentColumnBox>
              <ContentColumnBox>{data.cranks}</ContentColumnBox>
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
  :first-child {
    border-left: 1px solid #eaeaea;
    text-align: center;
  }
`;

const TableContent = styled.section``;

const ContentColumn = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  border-left: 1px solid #eaeaea;
`;

const ContentColumnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 2.07rem;
  border-right: 1px solid #eaeaea;

  :first-child {
    font-size: 0.8rem;
  }
`;
