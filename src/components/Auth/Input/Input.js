import React, { useState } from "react";
import "./Input.css";

function Input(props) {
  const [isTouched, setTouched] = useState(false);
  const [value, setValue] = useState("");

  function handleBlur() {
    setTouched(true);
    props.handleInput(props.name, value);
  }

  return (
    <div className="form__group">
      <label className="form__label">{props.label}:</label>
      <input
        className="form__input"
        type={props.type}
        placeholder={"Enter your " + props.label.toLowerCase()}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default Input;
