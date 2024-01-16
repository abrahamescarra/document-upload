import React, { ChangeEvent, useState } from "react";
import "../styles/Body.css";
import Select from "./Select";
import DragAndDrop from "./DragAndDrop";
import { selectNameOptions } from "./consts";
import ToogleSwitch from "./ToogleSwitch";

function Body() {
  const [selectedOption, setSelectedOption] = useState(selectNameOptions[0]);
  const [toogleOn, setToogleOn] = useState(false);
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
        <div className="divider" />
        <h5> Elapse Data Checking:</h5>
        <p
          style={{
            color: "#27a669",
            fontSize: "12px",
            marginTop: "-5px",
            marginBottom: "-5px",
          }}
        >
          <strong>No Elapsed Dates!</strong>
        </p>
        <div className="divider" />
        <h5>Tolerance Window:</h5>
        <ToogleSwitch
          label={toogleOn ? "Toogle On" : "Toogle Off"}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setToogleOn(!toogleOn)
          }
        />
      </div>
      <div className="right-column"></div>
    </div>
  );
}

export default Body;
