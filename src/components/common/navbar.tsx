import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Wrapper>
      <div>1</div>
      <div>2</div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: 5rem;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
`;
