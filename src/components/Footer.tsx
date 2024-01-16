import React from "react";
import { FileWithPath } from "react-dropzone";

type Props = {
  files: Array<FileWithPath>;
};

export default function Footer({ files }: Props) {
  const checkImportFile = () => {
    if (files[0]?.path) return true;
  };
  return (
    <div className="footer-container">
      {checkImportFile() ? (
        <>
          <h3 style={{ fontSize: "17px", marginTop: "40px" }}>
            Data in the import file is correct. Please press Continue to import.
          </h3>
          <button
            disabled={!checkImportFile()}
            type="button"
            className="continue-btn "
          >
            Continue Import
          </button>
        </>
      ) : (
        <></>
      )}

      <button type="button" className="cancel-btn">
        Cancel
      </button>
    </div>
  );
}
