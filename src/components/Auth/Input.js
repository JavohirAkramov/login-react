import React, { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const FormGroup = styled.div`
  margin-bottom: 16px;
`;
const FormLabel = styled.label`
  margin-bottom: 8px;
  display: block;
`;
const FormInput = styled.input`
  display: block;
  padding: 8px 16px;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #eee;
  border: 1px solid #bbb;
  border-radius: 8px;
`;
const FormSpanIcon = styled.span`
  position: relative;
  float: right;
  top: -26px;
  right: 16px;
  cursor: pointer;
  color: #999;
`;

function Input(props) {
  const [value, setValue] = useState("");
  const [inputType, setInputType] = useState(props.type);

  function changePasswordVisibitity() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }

  function handleBlur() {
    props.handleInput(props.name, value);
  }

  return (
    <FormGroup>
      <FormLabel>{props.label}:</FormLabel>
      <FormInput
        type={inputType}
        placeholder={"Enter your " + props.label.toLowerCase()}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
      />
      <FormSpanIcon
        onClick={changePasswordVisibitity}
        hidden={!(props.type === "password")}
      >
        <FontAwesomeIcon icon={inputType === "password" ? faEye : faEyeSlash} />
      </FormSpanIcon>
    </FormGroup>
  );
}

export default Input;
