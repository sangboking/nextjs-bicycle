import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Bicycle</title>
        <meta name="description" content="자전거 부품 계산기" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentSection>안녕11</ContentSection>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const number = "ww";

  return {
    props: {},
  };
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const ContentSection = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #fff;
`;
