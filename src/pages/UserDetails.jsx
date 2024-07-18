import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react'

function UserDetails() {

  const[logindata , setLogindata] = useState([])
  const[user, setUser] = useState([])


  useEffect(()=>{
    axios.get('http://localhost:1000/userdata')
    .then(res => setUser(res.data))
    .catch(err => console.log(err))
    axios.get('http://localhost:1000/logindata')
    .then(response => setLogindata(response.data))
    .catch(err => console.log(err))
  },[]);


  // const details =[
  //   {
  //     id:1,
  //     name:"Shree hariesh",
  //     email:"shreehariesh29@gmail",
  //     mobile:7338798973,
  //     type:"student"
  //   },
  //   {
  //     id:1,
  //     name:"Shree hariesh",
  //     email:"shreehariesh29@gmail",
  //     mobile:7338798973,
  //     type:"student"
  //   },
  //   {
  //     id:1,
  //     name:"Shree hariesh",
  //     email:"shreehariesh29@gmail",
  //     mobile:7338798973,
  //     type:"student"
  //   },
  //   {
  //     id:1,
  //     name:"Shree hariesh",
  //     email:"shreehariesh29@gmail",
  //     mobile:7338798973,
  //     type:"student"
  //   },
  //   {
  //     id:1,
  //     name:"Shree hariesh",
  //     email:"shreehariesh29@gmail",
  //     mobile:7338798973,
  //     type:"student"
  //   },
  //   {
  //     id:1,
  //     name:"Shree hariesh",
  //     email:"shreehariesh29@gmail",
  //     mobile:7338798973,
  //     type:"student"
  //   },
  // ]


  return (
    <div style={{marginLeft:'10%', marginRight:'10%',marginBottom:'100px',paddingTop:'80px'}} >
      <h1>User Details</h1>
      <div style={{display:'flex',justifyContent:'center'}}>
        <table style={{width:'70%',border:'gray 1px solid',borderRadius:'10px'}}>
          <thead>
            <tr>
              <th style={{padding:'20px',borderBottom:'gray 1px solid'}}>Sl:no</th>
              <th style={{padding:'20px',borderBottom:'gray 1px solid'}}>Name</th>
              <th style={{padding:'20px',borderBottom:'gray 1px solid'}}>Email</th>
              <th style={{padding:'20px',borderBottom:'gray 1px solid'}}>Mobile NO</th>
              <th style={{padding:'20px',borderBottom:'gray 1px solid'}}>Quries</th>
              <th style={{padding:'20px',borderBottom:'gray 1px solid'}}>Product list</th>
            </tr>
          </thead>
         
          <tbody>
            {logindata.map((item,index)=>(
              <tr key={item} >
                <td style={{textAlign:'center',padding:'10px',fontSize:'14px'}}>{index + 1}</td>
                <td style={{textAlign:'center',padding:'10px',fontSize:'14px'}}>{item.name}</td>
                <td style={{textAlign:'center',padding:'10px',fontSize:'14px'}}>{item.email}</td>
                <td style={{textAlign:'center',padding:'10px',fontSize:'14px'}}>{item.mobileno}</td>
                <td style={{textAlign:'center',padding:'10px',fontSize:'14px'}}>{item.queries}</td>
                <td style={{textAlign:'center',padding:'10px',fontSize:'14px'}}>{item.list}</td>
              </tr>
              
            ))}

          </tbody>
          
        </table>
      </div>
    </div>
  )
}

export default UserDetails