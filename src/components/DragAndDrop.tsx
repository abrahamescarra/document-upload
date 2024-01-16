/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { FaFileAlt } from "react-icons/fa";
import FileItem from "./FileItem";

let interval: string | number | NodeJS.Timer | undefined = undefined;
type Props = {
  onChange: Function;
};

function Dropzone({ onChange }: Props) {
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop: () => {
        setProgress(0);
        setRunning(true);
      },
      maxFiles: 1,
    });

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timer | undefined;
    if (running) {
      intervalId = setInterval(() => {
        if (progress !== 100) setProgress((prev) => prev + 1);
      }, 10);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [running]);

  useEffect(() => {
    if (progress === 100) {
      setRunning(false);
      clearInterval(interval);
      onChange(acceptedFiles);
    }
  }, [progress]);

  return (
    <div>
      <h5> Select a mainfest that you'd like to import</h5>
      <div className="dropzone-wrapper">
        <div {...getRootProps({ className: "dropzone" })}>
          <input className="input-zone" {...getInputProps()} />
          <div className="text-center">
            <FaFileAlt
              color="#fa9d26"
              style={{
                fontSize: "22px",
                marginBottom: "-5px",
                marginTop: "20px",
              }}
            />
            {isDragActive ? (
              <p className="dropzone-content">Release to drop the files here</p>
            ) : (
              <p className="dropzone-content">
                Drag & Drow Here or <strong>Browse</strong>
              </p>
            )}
          </div>
        </div>
        <div className="align-center">
          <button
            style={{ marginTop: "15px" }}
            {...getRootProps()}
            type="button"
            className="blue-button"
          >
            Upload Manifest
          </button>
        </div>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <div style={{ borderBottom: "2px solid #edeff3" }} />
        {acceptedFiles.map((file: FileWithPath) => (
          <FileItem file={file} progress={progress} />
        ))}
      </ul>
    </div>
  );
}

export default Dropzone;
