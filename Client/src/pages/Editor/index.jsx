import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import GrapesJS from "grapesjs";
import gjspresetnewsletter from "grapesjs-preset-newsletter";
import grapesjstailwind from "grapesjs-tailwind";
import { useEffect, useState } from "react";
import axios from "axios";
import Traits from "../../components/Traits";
import { useNavigate } from "react-router-dom";

const Editor = () => {
  const [editor, setEditor] = useState(null);
  const navigate = useNavigate();
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
          btnExp.onclick = async() => {
            await axios.post("http://localhost:8080/postHtml", {
              data: `
              <!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>Deno Web Builder | Denovin</title>
                  <script src="https://cdn.tailwindcss.com"></script>
                  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
                  <style>
                    ${e.getCss()}
                  </style>
                </head>
                ${e.getHtml({ cleanId: true })}
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
                <script>
                  AOS.init();
                </script>
              </html>              
              `,
            }).then((res)=>{
              navigate(`/Downlaod/${res.data.path}`)
            });
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
