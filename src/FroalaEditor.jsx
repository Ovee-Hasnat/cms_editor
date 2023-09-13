import React from "react";
import ReactDOM from "react-dom";

import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

// Include special components if required.
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import FroalaEditorA from "react-froala-wysiwyg/FroalaEditorA";
import FroalaEditorButton from "react-froala-wysiwyg/FroalaEditorButton";
import FroalaEditorImg from "react-froala-wysiwyg/FroalaEditorImg";
import FroalaEditorInput from "react-froala-wysiwyg/FroalaEditorInput";

import FroalaEditorComponent from "react-froala-wysiwyg";

const FroalaEditor = () => {
  return (
    <div style={{ maxWidth: "80%", margin: "auto", padding: "20px" }}>
      <FroalaEditorComponent />
    </div>
  );
};

export default FroalaEditor;
