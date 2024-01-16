import React, { ChangeEventHandler } from "react";
import Select from "./Select";
import { selectClientOptions } from "./consts";
import { CiClock2 } from "react-icons/ci";

type Props = {
  label: string;
  value: string;
  name: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

export default function TestingCenter({ label, value, name, onChange }: Props) {
  return (
    <div className="testing-container">
      <span style={{ fontSize: "13px", fontWeight: "inherit" }}>{label}</span>
      <Select
        options={selectClientOptions}
        selectedOption={value}
        onChange={onChange}
        className="select-client"
        name={name}
      />
      <CiClock2 style={{ fontSize: "20px" }} color="#1c3e6e" />
    </div>
  );
}
