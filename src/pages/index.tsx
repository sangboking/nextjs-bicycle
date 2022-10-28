import Acalculator from "@components/common/acalculator";
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
import type { GetStaticProps } from "next";
import Head from "next/head";
import styled from "styled-components";

interface PropsType {
  headData: string[];
  rmsData: IBikePartsData[];
  resData: IBikePartsData[];
  dmsData: IBikePartsData[];
  desData: IBikePartsData[];
}

const Home = ({ headData, rmsData, resData, dmsData, desData }: PropsType) => {
  return (
    <Wrapper>
      <Head>
        <title>Bicycle</title>
        <meta name="description" content="자전거 부품 계산기" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentSection>
        <Acalculator />

        <Table
          headData={headData}
          partsType="Mechanical Shift(Rim)"
          partsData={rmsData}
        />

        <Table
          headData={headData}
          partsType="Electronic Shift(Rim)"
          partsData={resData}
        />

        <Table
          headData={headData}
          partsType="Mechanical Shift(Disc)"
          partsData={dmsData}
        />

        <Table
          headData={headData}
          partsType="Electronic Shift(Disc)"
          partsData={desData}
        />
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
  height: 100vh;
  background-color: #fff;
`;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;
