import { useState, React } from "react";
import "./SignIn.css";
import Input from "../Input/Input";
import InputCheckbox from "../InputCheckbox/InputCheckbox";
import { Link, useNavigate, Navigate } from "react-router-dom";
import Admin from "../../Admin/Admin";

function SignIn() {
  const navigate = useNavigate();
  const [isSignedUp, setSignedUp] = useState(false);
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
    console.log({ ...values, [name]: value });
  }
  let handleSignIn = (evt) => {
    evt.preventDefault();
    if (local.login === values.login && local.password === values.password) {
      values.isAdmin ? navigate("/admin") : navigate("/home");
    } else alert("invalid login or password");
  };
  return (
    <form onSubmit={handleSignIn} className="form">
      <h1 className="form__title">Sign in</h1>
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
      <button className="form__link" onClick={handleSignIn}>
        Sign in {values.isAdmin ? "as admin" : null}
      </button>
    </form>
  );
}

export default SignIn;
