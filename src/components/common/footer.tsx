import React from "react";
import styled from "styled-components";

export default function Footer() {
  return <Wrapper>footer</Wrapper>;
}

const Wrapper = styled.footer`
  width: 100%;
  height: 5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: royalblue;
  margin-top: 60px;
`;
