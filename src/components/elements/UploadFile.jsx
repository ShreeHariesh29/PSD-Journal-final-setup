import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function UploadFile() {

    const[uploadfile, setUploadFile] = useState();


  return (
    <div >
        <input style={{border:'gray 1px solid', width:'200px', height:'50px', justifyContent:'center', margin:'10px' }} type="file" />
    </div>
  )
}

export default UploadFile