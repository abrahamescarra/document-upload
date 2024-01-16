import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { FileWithPath } from "react-dropzone";

function Card() {
  const [files, setFiles] = useState<Array<FileWithPath>>([]);
  const onFilesChange = (files: [FileWithPath]) => {
    setFiles(files);
  };
  return (
    <div className="card">
      <Header />
      <Body onFilesChange={onFilesChange} />
      <Footer files={files} />
    </div>
  );
}
export default Card;
