import React, { ChangeEventHandler } from "react";

type Props = {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
  text: string;
  marginLeft: boolean;
};

function RadioButton({
  name,
  value,
  onChange,
  checked,
  text,
  marginLeft,
}: Props) {
  return (
    <label
      className={
        marginLeft
          ? "radio-label radio-margin-left"
          : "radio-label radio-no-margin-left "
      }
    >
      <input
        className="radio-input"
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span className="custom-radio" />
      {text}
    </label>
  );
}

export default RadioButton;
