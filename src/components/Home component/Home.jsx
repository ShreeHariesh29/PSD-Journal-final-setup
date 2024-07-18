import React from 'react'
import Banner1 from './Homeimg/Banner1.jpg'
import Banner2 from './Homeimg/Banner4.jpg'
import Banner3 from './Homeimg/Banner5.jpg'
import medical from './Homeimg/Medical.jpg'
import './Home.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Home() {

  const [catImg, setCatImg] = useState([])

  useEffect (()=>{
    axios.get('http://localhost:1000/journalcollections')
    .then(res => setCatImg(res.data.slice(0,8)))
    .catch(err => console.log(err))
  })
  
  return (
    <div className='main'>
        <div style={{width:'100%', height:'450px',display:'flex', justifyContent:'space-between'}}>
            <div className='banner1' >
            </div>
            <div style={{width:'30%', display:'block', marginLeft:'5px'}}>
                <div>
                <img style={{width:'100%', height:'225px'}} src={Banner2} alt="" />
                </div>
                <div>
                <img style={{width:'100%', height:'220px'}} src={Banner3} alt="" />
            </div>
            </div>
        </div>
        <p style={{textAlign:'center',marginTop:'50px',fontWeight:'bolder',fontSize:'40px'}}>Welcome to PSD Journals and Publications </p> 
        <p  style={{textAlign:'center',fontWeight:'bolder',fontSize:'30px'}}> Your Gateway to Scholarly Excellence. </p> 
        <div style={{width:'100%',display:'flex',justifyContent:'space-evenly' }}>
          <div style={{width:'40%',textAlign:'center',margin:'30px',fontSize:'18px'}}>In the real world of all medical and dental education, staying updated with the latest research, breakthroughs, and clinical advancements is paramount. Educational institutions, especially all medical and dental colleges, play a pivotal role in shaping the future of healthcare professionals. For over two decades, PSD Journals & Periodicals, a sub-Company of Power Subscription & Distributors, has been the trusted source of knowledge for these institutions. In this blog post, we will explore the importance of PSD Journals & Periodicals and how they have become a vital resource for educational excellence. </div>
          <div style={{width:'50%'}}><img style={{width:'100%'}} src={medical} alt="" /></div>
        </div>
        <p style={{textAlign:'center',fontSize:'30px',fontWeight:'700',marginTop:'5%'}}>Journals by Discipline</p>
        <div style={{width:'100%',display:'flex',justifyContent:'space-between',marginTop:'20px'}}> 
          <div style={{width:'250px',height:'150px', border:'1px solid gray',borderRadius:'5px',marginLeft:'30px'}}>
            <div style={{width:'100%',height:'3px',backgroundColor:'blue'}}></div>
            <p style={{textAlign:'center', fontSize:'15px',marginTop:'20%'}}>Health Science</p>
            <div style={{width:'50%',height:'1px',backgroundColor:'blue',marginLeft:'24%',marginTop:'18%'}}></div>
          </div>
          <div style={{width:'250px',height:'150px', border:'1px solid gray',borderRadius:'5px'}}>
          <div style={{width:'100%',height:'3px',backgroundColor:'blue'}}></div>
          <p style={{textAlign:'center', fontSize:'15px',marginTop:'20%'}}>Life & Biomedical <br />Science</p>
          <div style={{width:'50%',height:'1px',backgroundColor:'blue',marginLeft:'24%',marginTop:'10%'}}></div>
          </div>
          <div style={{width:'250px',height:'150px', border:'1px solid gray',borderRadius:'5px'}}>
          <div style={{width:'100%',height:'3px',backgroundColor:'blue'}}></div>
          <p style={{textAlign:'center', fontSize:'15px',marginTop:'20%'}}>Material Science &<br />Engineering</p>
            <div style={{width:'50%',height:'1px',backgroundColor:'blue',marginLeft:'24%',marginTop:'10%'}}></div>
          </div>
          <div style={{width:'250px',height:'150px', border:'1px solid gray',borderRadius:'5px'}}>
          <div style={{width:'100%',height:'3px',backgroundColor:'blue'}}></div>
          <p style={{textAlign:'center', fontSize:'15px',marginTop:'20%'}}>Social Science & <br />Humanities</p>
            <div style={{width:'50%',height:'1px',backgroundColor:'blue',marginLeft:'24%',marginTop:'10%'}}></div>
          </div>
          <div style={{width:'250px',height:'150px', border:'1px solid gray',borderRadius:'5px',marginRight:'30px'}}>
          <div style={{width:'100%',height:'3px',backgroundColor:'blue'}}></div>
          <p style={{textAlign:'center', fontSize:'15px',marginTop:'20%'}}>All Sage journals</p>
            <div style={{width:'50%',height:'1px',backgroundColor:'blue',marginLeft:'24%',marginTop:'15.5%'}}></div>
          </div>
        </div>
        <p style={{textAlign:'center',marginTop:'5%',fontSize:'20px'}}>The Lifeline of All medical and Dental Colleges: The Significance of <br /> PSD Journals & Periodicals</p>
        <div style={{display:'flex', width:'80%', justifyContent:'space-around',margin:'0px 100px 10px 150px',flexWrap:'wrap'}}>
        {catImg.map((imgs) => (
          <div key={imgs}>
              <img style={{width:'250px', height:'250px',borderRadius:'5px',boxShadow:'3px 3px gray ',marginLeft:'10px',marginTop:'30px'}} src={imgs.image} alt="" />
          </div>
        ))}
        </div>
        <div style={{marginLeft:'5%', marginRight:'5%'}}>
        <h2 style={{marginTop:'50px'}}>Contact Us</h2>
        <hr />
        <p style={{textAlign:'center',fontSize:'20px'}}>Are you ready to empower your institution with the knowledge it deserves? <br /> Contact PSD Journals & Periodicals today to explore our subscription options and start your journey towards educational excellence.</p>
        </div>

        
        

    </div>
  )
}

export default Home