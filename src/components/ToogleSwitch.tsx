import React, { ChangeEventHandler } from "react";
import "../styles/ToogleSwitch.css";
import { CiClock2 } from "react-icons/ci";

type Props = {
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

function ToogleSwitch({ label, onChange }: Props) {
  return (
    <div className="container">
      <div className="toggle-switch">
        <input
          type="checkbox"
          onChange={onChange}
          className="checkbox"
          name={label}
          id={label}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
      <span style={{ marginLeft: "5px", fontSize: "14px" }}>{label}</span>
      <div className="vertical-divider" />
      <CiClock2 style={{ fontSize: "20px" }} color="#1c3e6e" />
      <span style={{ marginLeft: "5px", fontSize: "14px" }}>
        Select Tolerance Level
      </span>
    </div>
  );
}

export default ToogleSwitch;
