import React from "react";
import { VscClose } from "react-icons/vsc";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="close-box">
        <VscClose className="close-icon " color="white" />
      </div>
      <h2 className="doc-upload">Document Upload</h2>
      <div />
    </div>
  );
}
