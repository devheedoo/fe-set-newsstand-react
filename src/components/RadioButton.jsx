import React from "react";
import styled from "styled-components";
import { Button } from "./Styled/Button";

const RadioInput = styled.input`
  -webkit-appearance: none;
`;

const RadioGroup = styled(Button)`
  display: inline-flex;
  align-items: center;
  vertical-align: top;
`;

function RadioButton({ value, name, isActive, handleChange }) {
  return (
    <RadioGroup active={isActive} as="label">
      {value}
      <RadioInput
        type="radio"
        name={name}
        onChange={handleChange}
        value={value}
        defaultChecked={isActive}
      />
    </RadioGroup>
  );
}

export default RadioButton;
