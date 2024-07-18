import React from 'react'
import "./footer.css"
import Linkedin from './footimg/linkedin.png'
import insta from './footimg/instagram.png'
import whatsapp from './footimg/whatsapp.png'
import facebook from './footimg/facebook.png'

function Footer() {
  return (
    <div className='footer' style={{marginTop:'20px', paddingTop:'20px'}}>
        <h3 style={{textAlign:'center'}}>Contact PSD Journals & Periodicals today to explore our subscription options and start your journey towards <br /> educational excellence.</h3>
        <div style={{width:'100%',height:'200px',color:'white',display:'flex',justifyContent:'space-between'}}>
        <div style={{width:'40%',marginLeft:'10%'}}>
            <h3>Location</h3>
            <p>B2 Sai Ram Appartment, Susila Nagar 2nd cross street, <br />Kovilambakkam, Chennai - 600 117</p>
        </div>
        <div style={{width:'50%',marginLeft:'20%'}}>
        <h3 style={{marginLeft:'40px'}} >Connect with us </h3>
        <div>
        <a href="https://www.linkedin.com/in/shree-hariesh-m-825418212/"><img style={{marginLeft:'10px'}} src={Linkedin} alt="" /></a>
            <a href="https://wa.me/+919150932193"><img style={{marginLeft:'10px'}} src={whatsapp} alt="img" /></a> 
            <img style={{marginLeft:'10px'}} src={insta} alt="" />
            <img  style={{marginLeft:'10px'}}src={facebook} alt="" />
            
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer