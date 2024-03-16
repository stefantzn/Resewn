import { useState } from "react";
import "./formStyles.css";

const RadioButton = ({onChange, checked, value}) => {
    return (
        <label htmlFor={value} className="radiobutton-label">
            <input
              className="radiobutton-input"
              type="radio"
              name={value}
              id={value}
              value={value}
              onChange={onChange}
              checked={checked}
            ></input>
            <span className="custom-radiobutton" />
            {value}
        </label>
    );
}

export default RadioButton;