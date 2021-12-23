import React from "react";
import styled from "styled-components";

const FormAdmin = styled.div`
  margin-bottom: 16px;
`;
const FormInputCheckbox = styled.input`
  margin-right: 8px;
  display: inline-block;
  position: relative;
  background-color: #44f;
`;

function InputCheckbox(props) {
  return (
    <FormAdmin>
      <FormInputCheckbox
        type="checkbox"
        name={props.name}
        onClick={(e) => props.handleInput(props.name, e.target.checked)}
      />
      <label htmlFor={props.name}>{props.label}</label>
    </FormAdmin>
  );
}

export default InputCheckbox;
