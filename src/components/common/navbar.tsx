import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Wrapper>
      <ContentSection>
        <LogoBox>Logo</LogoBox>
        <MenuBox>Menu</MenuBox>
      </ContentSection>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  height: 59px;
  background-color: #fff;
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 1px solid #eaeaea;
`;

const ContentSection = styled.section`
  max-width: 1140px;
  height: 59px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoBox = styled.div``;

const MenuBox = styled.div``;
