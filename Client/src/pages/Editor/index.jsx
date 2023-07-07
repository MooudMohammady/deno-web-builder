import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import GrapesJS from "grapesjs";
import gjspresetnewsletter from "grapesjs-preset-newsletter";
import grapesjstailwind from "grapesjs-tailwind";
import { useEffect, useState } from "react";

const Editor = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if (!editor) {
      const e = GrapesJS.init({
        container: `#editor`,
        fromElement: true,
        plugins: [gjspresetnewsletter, grapesjstailwind],
        storageManager: {
          id: "editor", // Prefix identifier that will be used on parameters
          type: "remote", // Type of the storage
          autosave: true, // Store data automatically
          autoload: true, // Autoload stored data on init
          stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
          urlStore: "http://localhost:8000/api/v1/template",
          urlLoad: "http://localhost:8000/api/v1/template",
        },
      });
      setEditor(e);
      e.onReady(() => {
        const btnExp = document.createElement("button");
        btnExp.innerHTML = "Export";
        btnExp.className = `px-6 py-1 rounded bg-gray-600 m-1 hover:bg-gray-700`;
        btnExp.type = "button";

        e.on("run:export-template", () => {
          const el = e.Modal.getContentEl();
          el?.appendChild(btnExp);
          btnExp.onclick = () => console.log(e.getHtml({ cleanId: true }));
        });
      });
    }
  });
  return (
    <main dir="ltr">
      <div id="editor"></div>
    </main>
  );
};

export default Editor;
