import React, { useState } from "react";
import styled from "styled-components";

const Inputs = (props) => {
  return (
    <div>
      <Form>
        <form
          onSubmit={(e) =>
            props.generateResults(
              e,
              props.state.correctlyPlaced,
              props.state.validLetters,
              props.state.invalidLetters
            )
          }
        >
          <Form>Correctly Placed Letters</Form>
          {[...Array(5).keys()].map((num, key) => (
            <label key={key}>
              <input
                style={{ width: "40px", fontSize: "200%" }}
                type="text"
                maxLength="1"
                value={props.state.correctlyPlaced[num]}
                onChange={(e) => props.handleCorrectInputs(e, num)}
              />
            </label>
          ))}
          <br />
          <br />
          <label>
            <Form>Valid Letters</Form>
            <InputForms>
              <input
                type="text"
                value={props.state.validLetters}
                onChange={(e) => props.handleLetters(e, true)}
              />
            </InputForms>
          </label>
          <br />
          <label>
            <Form>Invalid Letters</Form>
            <InputForms>
              <input
                type="text"
                value={props.state.invalidLetters}
                onChange={(e) => props.handleLetters(e, false)}
              />
            </InputForms>
          </label>
          <br />
          <Buttons>
            <input type="submit" value="Get Results" />
          </Buttons>
        </form>
        <Buttons>
          <button onClick={props.reset}>Reset</button>
        </Buttons>
      </Form>
    </div>
  );
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputForms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Inputs;
