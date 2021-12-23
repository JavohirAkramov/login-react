import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import InputCheckbox from "./InputCheckbox";
import styled from "styled-components";

const FormTitle = styled.h1`
  margin: 0 0 16px 0;
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

function SignIn() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    login: "",
    password: "",
    isAdmin: false,
  });
  const local = {
    login: localStorage.getItem("login"),
    password: localStorage.getItem("password"),
    isAdmin: localStorage.getItem("isAdmin"),
  };

  function handleInput(name, value) {
    setValues({ ...values, [name]: value });
  }
  function handleSignIn(evt) {
    evt.preventDefault();
    if (local.login === values.login && local.password === values.password) {
      localStorage.setItem("isAuth", "true");
      values.isAdmin ? navigate("/admin") : navigate("/home");
    } else alert("invalid login or password");
  }

  return (
    <Form onSubmit={handleSignIn}>
      <FormTitle>Sign in</FormTitle>
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
      <FormLink onClick={handleSignIn}>
        Sign in {values.isAdmin ? "as admin" : null}
      </FormLink>
    </Form>
  );
}

export default SignIn;
