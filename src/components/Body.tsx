import React, { ChangeEvent, useState } from "react";
import "../styles/Body.css";
import Select from "./Select";
import DragAndDrop from "./DragAndDrop";
import { selectNameOptions } from "./consts";

function Body() {
  const [selectedOption, setSelectedOption] = useState(selectNameOptions[0]);
  return (
    <div className="body">
      <div className="left-column">
        <Select
          options={selectNameOptions}
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            setSelectedOption(event.target.value)
          }
          className="select-import-name"
          selectedOption={selectedOption}
        />
        <div className="divider" />
        <DragAndDrop />
      </div>
      <div className="right-column"></div>
    </div>
  );
}

export default Body;
