import React, { ChangeEvent, useState } from "react";
import Select from "./Select";
import DragAndDrop from "./DragAndDrop";
import { selectNameOptions, initialFormValues, testingCenters } from "./consts";
import ToogleSwitch from "./ToogleSwitch";
import RadioButton from "./RadioButton";
import TestingCenter from "./TestingCenter";

function Body() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [toogleOn, setToogleOn] = useState(false);
  const onFormValueChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };
  return (
    <div className="body">
      <div className="left-column">
        <Select
          options={selectNameOptions}
          onChange={onFormValueChange}
          className="select-import-name"
          selectedOption={formValues.importName}
          name="importName"
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
      <div className="right-column">
        <h5 style={{ marginTop: "0px" }}>
          Split Schedule using social distancing?
        </h5>
        <div>
          <RadioButton
            checked={formValues.splitSchedule === "Yes" ? true : false}
            name="splitSchedule"
            onChange={onFormValueChange}
            text="Yes"
            value="Yes"
            marginLeft={false}
          />
          <RadioButton
            checked={formValues.splitSchedule === "No" ? true : false}
            name="splitSchedule"
            onChange={onFormValueChange}
            text="No"
            value="No"
            marginLeft={true}
          />
        </div>
        <div className="divider-right" />
        <h5> Location Checking:</h5>
        <p
          style={{
            color: "#27a669",
            fontSize: "12px",
            marginTop: "-5px",
            marginBottom: "-5px",
          }}
        >
          <strong>All Available!</strong>
        </p>
        <div className="divider-right" />
        <h5 style={{ marginTop: "17px", marginBottom: "5px" }}>Client:</h5>
        <div>
          <RadioButton
            checked={formValues.clientSelect === "Single" ? true : false}
            name="clientSelect"
            onChange={onFormValueChange}
            text="Single"
            value="Single"
            marginLeft={false}
          />
          <RadioButton
            checked={formValues.clientSelect === "Multiple" ? true : false}
            name="clientSelect"
            onChange={onFormValueChange}
            text="Multiple"
            value="Multiple"
            marginLeft={true}
          />
        </div>
        {formValues.clientSelect === "Single" ? (
          <TestingCenter
            label="Testing Center"
            name="testingCenter"
            value={formValues.testingCenter}
            onChange={onFormValueChange}
          />
        ) : (
          // que esta mal aqui?
          testingCenters.map((label, index) => (
            <TestingCenter
              key={index}
              label={label}
              name={label}
              value={formValues.testingCenters[index]}
              onChange={(event) => {
                const newArr = formValues.testingCenters;
                newArr[index] = event.target.value;
                setFormValues({
                  ...formValues,
                  testingCenters: newArr,
                });
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Body;
