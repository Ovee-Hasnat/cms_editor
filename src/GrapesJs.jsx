import React from "react";
import "grapesjs/dist/css/grapes.min.css";
import grapesJS from "grapesjs";
import grapesJSMJML from "grapesjs-mjml";
import plugin from "grapesjs-preset-newsletter";

const GrapesJs = () => {
  setTimeout(() => {
    const editor = grapesJS.init({
      fromElement: true,
      container: "#gjs",
      height: "700px",
      width: "1200px",
      plugins: [plugin],
      // pluginsOpts: {
      //   [grapesJSMJML]: {
      //     // The font imports are included on HTML <head/> when fonts are used on the template
      //     fonts: {
      //       Montserrat: "https://fonts.googleapis.com/css?family=Montserrat",
      //       "Open Sans": "https://fonts.googleapis.com/css?family=Open+Sans",
      //     },
      //   },
      // },
    });

    // add custom fonts options on editor's font list
    editor.on("load", () => {
      const styleManager = editor.StyleManager;
      const fontProperty = styleManager.getProperty(
        "typography",
        "font-family"
      );

      const list = [];
      // empty list
      fontProperty.set("list", list);

      // custom list
      list.push(
        fontProperty.addOption({
          value: "Montserrat, sans-serif",
          name: "Montserrat",
        })
      );
      list.push(
        fontProperty.addOption({
          value: "Open Sans, sans-serif",
          name: "Open Sans",
        })
      );
      fontProperty.set("list", list);

      styleManager.render();
    });
  }, 1000);

  return (
    <div>
      <div id="gjs"></div>
    </div>
  );
};

export default GrapesJs;
