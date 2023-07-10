import { useParams } from "react-router-dom";
import JsFileDownloader from "js-file-downloader"

const Downlaod = () => {
  const param = useParams();
  return ( <>
    {/* <a href={`http://localhost:8080/${param.filename}.html`} download>download</a> */}
    <button onClick={()=>{
      new JsFileDownloader({
        url:`http://localhost:8080/${param.filename}.html`
      })
    }}>downlaod</button>
  </> );
}
 
export default Downlaod;