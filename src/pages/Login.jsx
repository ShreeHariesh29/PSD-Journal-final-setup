import React from 'react'
import { useState, useEffect } from 'react'
import logo from './img/psd logo.png'

function Login() {

  return (
    <div style={{width:'100%',height:'97.5vh', border:'1px gray solid', display:'flex', justifyContent:'space-between',marginTop:'0px'}}>
      <div style={{width:'35%',height:'98%', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div style={{width:'350px',height:'400px',border:'1px solid gray',borderRadius:'10px'}}>
          <img style={{width:'400px',marginTop:'30px'}} src={logo} alt="" />
          <form style={{marginLeft:'40px'}} >
            <p>User Id</p>
            <input style={{marginTop:'0px',width:'80%',height:'30px',border:'0.5px gray solid', borderRadius:'5px'}} type="email" /> <br />
            <p>Password</p>
            <input style={{marginTop:'0px',width:'80%',height:'30px',border:'0.5px gray solid', borderRadius:'5px'}} type="password" /> <br />
            <button style={{marginTop:'20px',width:'82%',height:'30px',border:'0.5px gray solid', borderRadius:'5px'}}>Login</button>
            {/* <label  > Admin Id</label> <br />
            <input style={{marginTop:'15px'}} type="email" /> <br />
            <label style={{marginTop:'15px'}} >Password</label> <br />
             */}
          </form>
        </div>
      </div>
      <div  style={{width:'65%',height:'100%',backgroundColor:'blue'}}>sfrdgfd</div>
    </div>
  )
}

export default Login