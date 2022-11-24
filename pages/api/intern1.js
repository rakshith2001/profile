import React from 'react'
import Axios from "axios"
import FileDownload from "js-file-download"


export default function intern1() {
    const download=(e)=>{
        e.preventDefault();
        Axios({
          url: "http://localhost:4000/internship",
          method:"GET",
          responseType:"blob"
    
        }).then((res)=>{
          FileDownload(res.data,"Django project.pdf")
    
        })
      }
  return (
    <div >
        <button  onClick={(e)=>download(e)} className=" text-purple-600">Hospital Management System</button>
    </div>
  )
}
