import React, { useState, useEffect, useRef } from 'react'
import { Carousel } from 'react-responsive-carousel';

import axios from 'axios';
import journalimage from './img/WEB1.jpeg.jpg'
import img1 from './img/library.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from './img/journal page banner 2.jpg'
import banner2 from './img/journal page banner 1.jpg'
import banner3 from './img/journal page banner 3.jpg'

function Jornals() {

 const [journal, setJournal] = useState();
 const [addjournals, setAddJournals] = useState();

 useEffect (()=>{
  // axios.get('http://localhost:1000/journaldata')
  // .then(response => setJournal(response.data))
  // .catch(err => console.log(err))
  axios.get('http://localhost:1000/journalcollections')
  .then(response =>  setJournalImg(response.data))
  .catch(err => console.log(err))
 },[])

 const toggleAddjournals =() =>{
  setAddJournals(!addjournals)
 }
const[journalImg, setJournalImg] = useState()
 const fileInput = useRef();

 const[file, setFile] = useState();
 const [fileName, setFileName] = useState();
 const [resultText, setResultText] = useState("");




 const saveFile =()=>{
  setFile(fileInput.current.files[0])
  // setFileName(fileInput.current.files[0].name)
 }

 const UploadImg = async () =>{
  const formData = new FormData();
  formData.append('file',file);
  // formData.append('fileName',fileName);
  axios.post('http://localhost:1000/addjournals', formData)
  .then(res => console.log(res))
  .catch(err => console.log(err))


 }
 



  return (
    <div style={{marginLeft:'10%', marginRight:'10%',paddingTop:'80px'}}>

      <Carousel style={{height:'200px'}}>
        <div >
        <img src={banner1} alt="" />
        </div>
        <div>
          <img src={banner2} alt="" />
        </div>
        <div>
          <img src={banner3} alt="" />
        </div>
      </Carousel>
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <h1>journals collections</h1>
      <button onClick={toggleAddjournals}  style={{width:'100px', height:'40px',marginTop:'20px',borderRadius:'10px', border:'none', backgroundColor:'blue', color:'white', cursor:'pointer' }}> Add Journals</button>
      </div>
      { addjournals && (
        <div style={{width:'80%',  height:'100%', backgroundColor:'#00000051',position:'absolute', marginRight:'10%'}}>
        <form style={{marginLeft:'30%', border:'1px solid gray', width:'400px', height:'200px', backgroundColor:'white', marginTop:'10%', borderRadius:'10px', paddingLeft:'20px'}}>
        <h1 style={{textAlign:'center'}}>Add Journals</h1>
          <input  style={{width:'60%', marginTop:'10px'}} type="file" ref={fileInput} onChange={saveFile} /> 
          <button onClick={UploadImg}>Upload Img</button>
        </form>
       </div>
      )}
      
      
      <div style={{width:'100%',display:'grid',gridTemplateColumns:'auto auto auto auto auto', justifyContent:'space-between', marginBottom:'50px', grid:'wrap'}}>
      {journalImg && journalImg.map((item)=>(
                <div key={item} >
                  <img style={{width:'200px',height:'200px', marginTop:'40px'}} src={item.image} alt={item.journalcoverimg} />
                </div>
            ))}
      </div> 
      <a href="http://localhost:1000/imgs/file_1698553023591.pdf">press</a>
     
      

      
    </div>
  )
}

export default Jornals