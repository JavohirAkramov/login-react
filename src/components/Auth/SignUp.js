import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import InputCheckbox from "./InputCheckbox";
import styled from "styled-components";

const FormTitle = styled.h1`
  margin: 0 0 16px 0;
`;
const FormInner = styled.div`
  margin-bottom: 16px;
`;
const FormDesc = styled.span`
  color: #999;
  margin-right: 16px;
`;
const FormLinkContainer = styled.div`
  display: inline-block;
  text-decoration: none;
  color: #44f;
`;
const FormLink = styled.button`
  margin: 0 auto;
  padding: 8px 16px;
  display: block;
  width: 80%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #44f;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  color: #fff;
  text-align: center;
`;
const Form = styled.form`
  margin: 32px auto;
  padding: 32px;
  width: 40%;
  background-color: #eee;
  border-radius: 32px;
  font-family: serif;
  @media only screen and (max-width: 800px) {
    width: 80%;
  }
  @media only screen and (max-width: 320px) {
    width: 100%;
  }
`;

function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    login: "",
    password: "",
    isAdmin: false,
  });

  function handleInput(name, value) {
    setValues({ ...values, [name]: value });
  }
  function handleSubmit() {
    localStorage.setItem("firstName", values.firstName);
    localStorage.setItem("lastName", values.lastName);
    localStorage.setItem("login", values.login);
    localStorage.setItem("password", values.password);
    localStorage.setItem("isAdmin", values.isAdmin);
    navigate("signin");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Sign up</FormTitle>
      <FormInner>
        <FormDesc>Already have an account?</FormDesc>
        <FormLinkContainer>
          <Link style={{ textDecoration: "none", color: "#44f" }} to="/signin">
            Sign in
          </Link>
        </FormLinkContainer>
      </FormInner>
      <Input
        name={"firstName"}
        label={"First name"}
        type={"text"}
        handleInput={handleInput}
      />
      <Input
        name={"lastName"}
        label={"Last name"}
        type={"text"}
        handleInput={handleInput}
      />
      <Input
        name={"login"}
        label={"Login"}
        type={"text"}
        handleInput={handleInput}
      />
      <Input
        name={"password"}
        label={"Password"}
        type={"password"}
        handleInput={handleInput}
      />
      <InputCheckbox
        name={"isAdmin"}
        label={"admin"}
        handleInput={handleInput}
      />
      <FormLink onClick={handleSubmit}>
        Sign in {values.isAdmin ? "as admin" : null}
      </FormLink>
    </Form>
  );
}

export default SignUp;
