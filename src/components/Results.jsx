import React from "react";
import ResultWord from "./ResultWord.jsx";
import styled from "styled-components";

const Results = (props) => {
  return (
    <div>
      <div>
        {props.state.results.length > 0 ? (
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              Words that can be guessed and can be the word of the day
            </div>
            <Result>
              {props.state.results.map((word, key) => (
                <ResultWord word={word} key={key} />
              ))}
            </Result>
          </div>
        ) : null}
      </div>
      <div>
        {props.state.results2.length > 0 ? (
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              Words that can be guessed, but are never selected as the word of
              the day
            </div>
            <Result>
              {props.state.results2.map((word, key) => (
                <ResultWord word={word} key={key} />
              ))}
            </Result>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const Result = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 700px;
  justify-content: center;
  border: 2px solid gray;
  padding: 2%;
  margin: 2%;
`;

export default Results;
