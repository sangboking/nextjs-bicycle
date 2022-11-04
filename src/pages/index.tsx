import Calculator from "@components/common/calculator";
import Footer from "@components/common/footer";
import Table from "@components/common/table";
import {
  discElectronicShift,
  discMechanicalShift,
  headerData,
  IBikePartsData,
  rimElectronicShiftData,
  rimMechanicalShiftData,
} from "@data/data";
import { tabStateAtom } from "@store/atom";
import type { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

interface PropsType {
  headData: string[];
  rmsData: IBikePartsData[];
  resData: IBikePartsData[];
  dmsData: IBikePartsData[];
  desData: IBikePartsData[];
}

const Home = ({ headData, rmsData, resData, dmsData, desData }: PropsType) => {
  const [tabState, setTabState] = useRecoilState(tabStateAtom);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "msr") setTabState(1);
    if (e.target.value === "esr") setTabState(2);
    if (e.target.value === "msd") setTabState(3);
    if (e.target.value === "esd") setTabState(4);
  };

  return (
    <Wrapper>
      <Head>
        <title>Bicycle</title>
        <meta name="description" content="자전거 부품 계산기" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentSection>
        <Calculator />

        <select onChange={handleSelectChange}>
          <option value="msr">Mechanical Shift(Rim)</option>
          <option value="esr">Electronic Shift(Rim)</option>
          <option value="msd">Mechanical Shift(Disc)</option>
          <option value="esd">Electronic Shift(Disc)</option>
        </select>

        {tabState === 1 && (
          <Table
            headData={headData}
            partsType="Mechanical Shift(Rim)"
            partsData={rmsData}
          />
        )}

        {tabState === 2 && (
          <Table
            headData={headData}
            partsType="Electronic Shift(Rim)"
            partsData={resData}
          />
        )}

        {tabState === 3 && (
          <Table
            headData={headData}
            partsType="Mechanical Shift(Disc)"
            partsData={dmsData}
          />
        )}

        {tabState === 4 && (
          <Table
            headData={headData}
            partsType="Electronic Shift(Disc)"
            partsData={desData}
          />
        )}
      </ContentSection>

      <Footer />
    </Wrapper>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
  const headData = headerData;
  const rmsData = rimMechanicalShiftData;
  const resData = rimElectronicShiftData;
  const dmsData = discMechanicalShift;
  const desData = discElectronicShift;

  return {
    props: {
      headData,
      rmsData,
      resData,
      dmsData,
      desData,
    },
  };
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
`;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;
