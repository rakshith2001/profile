import React from 'react'
import Axios from "axios"
import FileDownload from "js-file-download"



export default function downloading() {
    const download=(e)=>{
        e.preventDefault();
        Axios({
          url: "http://localhost:4000/internship",
          method:"GET",
          responseType:"blob"
    
        }).then((res)=>{
          FileDownload(res.data,"Resume.pdf")
    
        })
      }
  return (
    <div >
        <button onClick={(e)=>download(e)}
                  className="bg-gradient-to-r   from-purple-700  to-red-600 text-white px-4 py-2 border-none rounded-md ml-8 "
                 
                   >
                  Resume
                </button>
    </div>
  )
}




