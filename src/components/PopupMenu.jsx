/* eslint-disable no-unused-vars */
import React from "react";

const PopupMenu = ({ pdf, show, png }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "300px",
          padding: "55px 25px",
          background: "white",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <button onClick={pdf}>Export as PDF</button>
        <button onClick={png}>Export as PNG</button>
        <button>Export as JPG</button>
        <p
          style={{
            color: "red",
            cursor: "pointer",
            fontWeight: "bold",
            width: "fit-content",
            margin: "auto",
          }}
          onClick={() => show(false)}
        >
          Close
        </p>
      </div>
    </div>
  );
};

export default PopupMenu;
