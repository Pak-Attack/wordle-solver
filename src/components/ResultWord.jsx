import React from "react";
import styled from "styled-components";

const ResultWord = (props) => {
  return <Word>{props.word}</Word>;
};

const Word = styled.div`
  display: flex;
  align-content: center;
  width: 60px;
  border: 2px solid gray;
  padding: 10px;
  margin: 2px;
`;

export default ResultWord;
