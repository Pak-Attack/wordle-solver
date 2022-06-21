import React, { useState, useEffect } from "react";
import { validDictionary, extendedDictionary } from "./dictionarys.js";
import Inputs from "./Inputs.jsx";
import Results from "./Results.jsx";
import styled from "styled-components";

const App = (props) => {
  const [state, setState] = useState({
    correctlyPlaced: ["", "", "", "", ""],
    validLetters: "",
    invalidLetters: "",
    results: [],
    results2: [],
    overlap: [],
  });

  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  const handleCorrectInputs = (e, x) => {
    const value = e.target.value;
    let v = state.correctlyPlaced;
    alphabet.split("").includes(value.toLowerCase())
      ? (v[x] = value.toUpperCase())
      : (v[x] = "");
    setState((prevState) => {
      return { ...prevState, correctlyPlaced: v };
    });
  };

  const handleLetters = (e, bool) => {
    const value = e.target.value;
    let filteredValue = value
      .split("")
      .filter((e) => alphabet.split("").includes(e.toLowerCase()))
      .map((e) => e.toUpperCase());
    const filteredSet = new Set();
    filteredValue.forEach((e) => filteredSet.add(e));
    let filtered = Array.from(filteredSet).join("");
    setState((prevState) => {
      return bool
        ? { ...prevState, validLetters: filtered }
        : { ...prevState, invalidLetters: filtered };
    });
  };

  const generateResults = (e, correctArray, valid, invalid) => {
    e.preventDefault();
    let results = validDictionary.slice();
    let results2 = extendedDictionary.slice();
    for (let i = 0; i < 5; i++) {
      if (correctArray[i].length > 0) {
        results = results.filter((word) => word[i] === correctArray[i]);
        results2 = results2.filter((word) => word[i] === correctArray[i]);
      }
    }
    valid.split("").forEach((letter) => {
      results = results.filter((word) => word.split("").includes(letter));
      results2 = results2.filter((word) => word.split("").includes(letter));
    });
    invalid.split("").forEach((letter) => {
      results = results.filter((word) => !word.split("").includes(letter));
      results2 = results2.filter((word) => !word.split("").includes(letter));
    });

    let overlappingLetters = [];
    state.validLetters.split("").forEach((letter) => {
      if (state.invalidLetters.split("").includes(letter)) {
        overlappingLetters.push(letter);
      }
    });
    state.correctlyPlaced.forEach((letter) => {
      if (state.invalidLetters.split("").includes(letter)) {
        overlappingLetters.push(letter);
      }
    });
    setState((prevState) => {
      return {
        ...prevState,
        results: results,
        results2: results2,
        overlap: overlappingLetters,
      };
    });
  };

  const reset = () => {
    setState(() => {
      return {
        correctlyPlaced: ["", "", "", "", ""],
        validLetters: "",
        invalidLetters: "",
        results: [],
        results2: [],
        overlap: [],
      };
    });
  };

  return (
    <div>
      <Title>Wordle Solver</Title>
      {true ? (
        <Body>
          <div>
            <Inputs
              state={state}
              handleCorrectInputs={handleCorrectInputs}
              handleLetters={handleLetters}
              generateResults={generateResults}
              reset={reset}
            />
          </div>
          <div>
            {state.overlap.length > 0 ? (
              <div>
                <br />
                <div>
                  The following letters are present in both valid and invalid:
                </div>
                <div>
                  {state.overlap.map((letter, key) => (
                    <div key={key}>{letter}</div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <br />
          <div>
            <Results state={state} />
          </div>

          <div></div>
        </Body>
      ) : null}
    </div>
  );
};

const Title = styled.h1`
  font-family: "nyt-karnakcondensed";
  font-weight: 700;
  font-size: 37px;
  line-height: 100%;
  letter-spacing: 0.01em;
  text-align: center;
  left: 0;
  right: 0;
  pointer-events: none;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
