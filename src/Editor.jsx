import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor"; // use react-email-editor instead
import sample from "./sample.json";
import html2canvas from "html2canvas";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;

const Bar = styled.div`
  flex: 1;
  background-color: #61dafb;
  color: #000;
  padding: 10px;
  display: flex;
  max-height: 40px;

  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }

  button {
    flex: 1;
    padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    background-color: #000;
    color: #fff;
    border: 0px;
    max-width: 150px;
    cursor: pointer;
  }
`;

const Example = () => {
  const emailEditorRef = useRef();
  const [preview, setPreview] = useState(false);

  const saveDesign = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.saveDesign((design) => {
      console.log("saveDesign", design);
      alert("Design JSON has been logged in your developer console.");
    });
  };

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(async (data) => {
      const { design, html } = data;
      var el = document.createElement("div");
      el.innerHTML = html;
      console.log("exportHtml", typeof el);

      const winUrl = URL.createObjectURL(
        new Blob([html], { type: "text/html" })
      );

      const cv = htmlToImage.toCanvas(winUrl).then(function (canvas) {
        console.log(el);
        console.log(canvas);

        // document.body.appendChild(canvas);
        // newWin.document.body.appendChild(canvas);
        // newWin.document.close();
        // newWin.print();
      });
      window.open(winUrl, "", `height=auto, width=auto`).print();

      // html2canvas(el)
      //   .then((canvas) => {
      //     console.log(el);
      //     // document.body.appendChild(canvas);
      //   })
      //   .catch((err) => console.log(err));

      // htmlToImage.toPng(el).then(function (dataUrl) {
      //   download(dataUrl, "my-PNG.png");
      // });
    });
  };

  // const togglePreview = () => {
  //   const unlayer = emailEditorRef.current?.editor;

  //   if (preview) {
  //     unlayer?.hidePreview();
  //     setPreview(false);
  //   } else {
  //     unlayer?.showPreview("desktop");
  //     setPreview(true);
  //   }
  // };

  const onDesignLoad = (data) => {
    console.log("onDesignLoad", data);
  };

  const onLoad = (unlayer) => {
    console.log("onLoad", unlayer);
    unlayer.addEventListener("design:loaded", onDesignLoad);
    // unlayer.loadDesign(sample);
  };

  const onReady = (unlayer) => {
    console.log("onReady", unlayer);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Container>
        <Bar>
          <h1>Text Editor</h1>
          <button onClick={saveDesign}>Save Design</button>
          <button onClick={exportHtml}>Export HTML</button>
        </Bar>

        <React.StrictMode>
          <EmailEditor
            ref={emailEditorRef}
            onLoad={onLoad}
            onReady={onReady}
            minHeight={"650px"}
          />
        </React.StrictMode>
      </Container>
    </div>
  );
};

export default Example;
