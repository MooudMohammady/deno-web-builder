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
        btnExp.innerHTML = "Export to zip";
        btnExp.className = `px-6 py-1 rounded border border-gray-600 m-1 hover:bg-gray-500/50`;
        btnExp.type = "button";
        e.on("run:export-template", () => {
          const el = e.Modal.getContentEl();
          el?.appendChild(btnExp);
          btnExp.onclick = () => {
            const res = axios.post("http://localhost:4000/postHtml", {
              data: `
              <!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>Deno Web Builder | Denovin</title>
                  <script src="https://cdn.tailwindcss.com"></script>
                  <link rel="stylesheet" href="./aos.css">
                </head>
                ${e.getHtml({ cleanId: true })}
                <script src="./aos.js"></script>
                <script>
                  AOS.init();
                </script>
              </html>              
              `,
            });
            const a = document.createElement("a");
            a.style.display = "none";
            a.download = `Deno-web-builder.zip`;
            a.href = res.data.path;
            document.body.appendChild(a);
            a.click();
          };
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
