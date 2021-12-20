import React, { useState } from "react";
import "./SignUp.css";
import Input from "../Input/Input";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import { Link } from "react-router-dom";

function SignUp() {
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

  let handleSubmit = () => {
    localStorage.setItem("firstName", values.firstName);
    localStorage.setItem("lastName", values.lastName);
    localStorage.setItem("login", values.login);
    localStorage.setItem("password", values.password);
    localStorage.setItem("isAdmin", values.isAdmin);
  };

  console.log(values);
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">Sign up</h1>
      <div className="form__inner">
        <span className="form__desc">Already have an account?</span>
        <Link className="form__link-signin" to="/signin">
          Sign in
        </Link>
      </div>
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
      <Link to="/signin" className="form__submit" onClick={handleSubmit}>
        Sign up
      </Link>
    </form>
  );
}

export default SignUp;
