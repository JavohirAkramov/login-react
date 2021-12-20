import React from "react";
import "./InputCheckbox.css";

function InputCheckbox(props) {
  return (
    <div className="form__admin">
      <input
        type="checkbox"
        className="form__checkbox"
        name={props.name}
        onClick={(e) => props.handleInput(props.name, e.target.checked)}
      />
      <label htmlFor={props.name}>{props.label}</label>
    </div>
  );
}

export default InputCheckbox;
