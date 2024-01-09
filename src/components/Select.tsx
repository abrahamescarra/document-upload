import React, { ChangeEvent } from "react";

type Props = {
  options: Array<string>;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  className: string;
  selectedOption: string;
};

function Select({ selectedOption, options, onChange, className }: Props) {
  return (
    <select
      className={className}
      value={selectedOption}
      onChange={onChange}
      defaultValue={options[0]}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
