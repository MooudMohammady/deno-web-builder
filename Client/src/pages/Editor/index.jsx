import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import GrapesJS from "grapesjs";
import gjspresetnewsletter from "grapesjs-preset-newsletter";
import grapesjstailwind from "grapesjs-tailwind";
import { useEffect, useState } from "react";
import axios from "axios";
import Traits from "../../components/Traits";

const Editor = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if (!editor) {
      const e = GrapesJS.init({
        container: `#editor`,
        fromElement: true,
        plugins: [gjspresetnewsletter, grapesjstailwind],
        storageManager: {
          id: "editor",
        },
      });
      setEditor(e);
      Traits(e);
      e.onReady(() => {
        const btnExp = document.createElement("button");
        btnExp.innerHTML = "Export";
        btnExp.className = `px-6 py-1 rounded bg-gray-600 m-1 hover:bg-gray-700`;
        btnExp.type = "button";

        e.on("run:export-template", () => {
          const el = e.Modal.getContentEl();
          el?.appendChild(btnExp);
          btnExp.onclick = () => {
            const res = axios.post("http://localhost:4000/postHtml", {
              data: e.getHtml({ cleanId: true }),
            });
            const a = document.createElement("a");
            a.style.display = "none";
            a.download = `${Date.now()}.html`
            a.href = res.data.href || "http://localhost:4000/files/1342412424.html";
            document.body.appendChild(a);
            a.click();
          }
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
