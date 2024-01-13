import React from "react";
import { FileWithPath } from "react-dropzone";
import { BsFileEarmarkImage } from "react-icons/bs";

type Props = {
  file: FileWithPath;
  progress: number;
};

function FileItem({ file, progress }: Props) {
  const bytesToMB = (fileSizeInBytes: number): number => {
    const megabytes = fileSizeInBytes / (1024 * 1024);
    return parseFloat(megabytes.toFixed(1));
  };

  return (
    <li key={file.path}>
      <BsFileEarmarkImage
        color="#fa9d26"
        style={{
          fontSize: "25px",
          marginRight: "15px",
        }}
      />
      <div style={{ width: "100%", paddingRight: "20px" }}>
        <div
          style={{
            paddingBottom: "5px",
            paddingLeft: "3px",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <div>{file.path}</div>
          <div
            style={{
              fontSize: "12px",
              color: "#a6a8b1",
              letterSpacing: "-0.5px",
            }}
          >
            <strong>{bytesToMB(file.size)}MB</strong>
          </div>
        </div>
        <div style={{ width: "100%", height: "2px", background: "#edeff3" }}>
          <div
            style={{
              width: `${progress}%`,
              height: "2px",
              background: "#fa9d26",
            }}
          />
        </div>
      </div>
    </li>
  );
}

export default FileItem;
