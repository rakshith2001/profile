
import Axios from "axios"
import FileDownload from "js-file-download"

export default function mad() {
    const download=(e)=>{
        e.preventDefault();
        Axios({
          url: "http://localhost:4000/mad",
          method:"GET",
          responseType:"blob"
    
        }).then((res)=>{
          FileDownload(res.data,"Android Project.pdf")
    
        })
      }
  return (
    <div >
            <button  onClick={(e)=>download(e)} >Mini Games</button>
        </div>
  )
}
