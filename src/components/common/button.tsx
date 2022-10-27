import React from "react";
import styled from "styled-components";

interface buttonProps {
  content: string;
  clickFunc?: any;
}

export default function Button({ content, clickFunc }: buttonProps) {
  return <Wrapper onClick={clickFunc}>{content}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100px;
  height: 40px;
  background-color: pink;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
`;
