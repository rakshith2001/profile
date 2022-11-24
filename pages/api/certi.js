import React from 'react'
import Axios from "axios"
import FileDownload from "js-file-download"


export default function certi() {

    const download=(e)=>{
        e.preventDefault();
        Axios({
          url: "http://localhost:4000/internship1",
          method:"GET",
          responseType:"blob"
    
        }).then((res)=>{
          FileDownload(res.data,"Project.jpg")
    
        })
      }
      
  return (
    
        <div >
            <button  onClick={(e)=>download(e)} >Certificate</button>
        </div>
      )

}
