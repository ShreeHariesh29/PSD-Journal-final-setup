import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Nav.css';
import logo from './img/psd logo.png';
import whatsapp from './img/whatsapp.png'
import { IoNotifications } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";


function Nav () {

  const [login, setLogin] = useState(false)
  const [input, setInput] = useState({
    email:'',
    password:'',
  })

  const handleChange =(e) =>{
    setInput({...input,[e.target.name]:e.target.value})
  }
  const Submit = (e) =>{
    
    console.log(input);
  }

    const [Name, setName] = useState('');
    const [Email, setEmail] =  useState('');
    const [CustomerNumber, setCustomerNumber] =  useState('');
    const [Queries , setQueries] =  useState('');
  
    // const handleSubmit = async () => {

     
    //   try {
    //     const response = await fetch('http://localhost:1000/customerdetails', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({Name, Email, CustomerNumber, Queries}),
    //     });
    //     if (response.ok) {
    //       console.log('Post added successfully!');
    //       console.log(response)
    //     } else {
    //       console.error('Failed to add post.');
    //     }
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // };


  // const[Email, setEmail] = useState({})
  // const[CustomerNumber, setCustomerNumber] = useState({});

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   axios.post("http://localhost:1000/customerdetails",{Email, CustomerNumber})
  //   .then(result => console.log(result))
  //   .catch(err => console.log(err))
 
  // }
  


  return (
    //
    <div className='navcontainer'>
       {/* {login && (
      <div  style={{width:'100vw',height:'100%',backgroundColor:' rgba(166, 164, 164, 0.779)',paddingTop:'10%',position:'absolute'}}>
      <div style={{backgroundColor:'white',width:'20%',height:'40%',marginLeft:'40%',borderRadius:'10px'}}>
         <h1 style={{textAlign:'center'}}>Login</h1>
        <form >
          <label> Name </label> <br />
          <input value={Name} name="name" onChange={(e)=> setName(e.target.value)} type="text" /> <br />
          <label> Email </label> <br />
          <input value={Email} name="email" onChange={(e)=> setEmail(e.target.value)} type="text" /> <br />
          <label> CustomerNumber </label> <br />
          <input value={CustomerNumber} name="CustomerNumber" onChange={(e)=> setCustomerNumber(e.target.value)} type="text" /> <br />
          <label > Queries</label> <br />
          <input value={Queries} name="password" onChange={(e)=> setQueries(e.target.value)} type="text" /> <br />
          <button type='submit' onClick={()=>{ToggleModel(); }}>submit</button>
        </form>
       </div>
  
     </div>
    )} */}
      {/* <div style={{marginLeft:'10%',marginRight:'10%'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <img style={{width:'400px',height:'80px'}} src={logo} alt="" />
            <div style={{display:'flex'}}>
                <a style={{marginRight:'20px', marginTop:'15px', color:'black', textDecoration:'none'}} href="https://www.google.com/maps/place/4,+Periyar+Nagar+Main+Rd,+Periyar+Nagar,+Madipakkam,+Chennai,+Tamil+Nadu+600091/@12.9618316,80.1996713,17.35z/data=!4m5!3m4!1s0x3a525dc3315d18ef:0x5fcd76cec036dbf!8m2!3d12.9617575!4d80.1992374?entry=ttu"> Location </a>
                <p onClick={ToggleModel} style={{marginRight:'20px',cursor:'pointer'}}>login</p>
                <p style={{marginRight:'20px',cursor:'pointer'}}>contact</p>
            </div>
      </div>
        <nav style={{}}>
                <ul className='nav' style={{display:'flex',textDecoration:'none',listStyle:'none',}}>
                    <Link to="/" style={{marginRight:'20px',marginLeft:'10px',padding:'10px',textDecoration:'none',listStyle:'none',color:'black'}} >Home</Link>
                    <Link to="/journals"  style={{marginRight:'20px',padding:'10px',textDecoration:'none',listStyle:'none',color:'black'}}>Journals</Link>
                    <Link to="/research"  style={{marginRight:'20px',padding:'10px',textDecoration:'none',listStyle:'none',color:'black'}}>Research books</Link>
                    <Link to="/userdetails"  style={{marginRight:'20px',padding:'10px',textDecoration:'none',listStyle:'none',color:'black'}}>User Details</Link>
                    <Link to="/about"  style={{marginRight:'20px',padding:'10px',textDecoration:'none',listStyle:'none',color:'black'}}>About Us</Link>
                </ul>
            </nav>
            <hr /> */}
           
    {/* </div> */}
    <div className='navbar' style={{width:'100%', height:'80px', display:'flex', justifyContent:'space-between'}}>
      <div style={{width:'25%'}}>
        <Link to="/"><img style={{width:'100%',height:'100%'}} src={logo} alt="" />
</Link>
      </div>
      <div style={{width:'50%'}}>
      <nav style={{}}>
                <ul className='nav' style={{display:'flex',textDecoration:'none',listStyle:'none',}}>
                    <Link className='page' to="/" style={{marginRight:'20px',marginLeft:'10px',padding:'10px',textDecoration:'none',listStyle:'none',color:'black'}} >Home</Link>
                    <Link className='page' to="/journals"  style={{marginRight:'20px',padding:'10px',textDecoration:'none',listStyle:'none',color:'black'}}>Journals</Link>
                    <Link className='page' to="/research"  style={{marginRight:'20px',padding:'10px',textDecoration:'none',listStyle:'none',color:'black'}}>Research books</Link>
                    <Link className='page' to="/userdetails"  style={{marginRight:'20px',padding:'10px',textDecoration:'none',listStyle:'none',color:'black'}}>User Details</Link>
                    <Link className='page' to="/about"  style={{marginRight:'20px',padding:'10px',textDecoration:'none',listStyle:'none',color:'black'}}>About Us</Link>
                    {/* <a href="https://wa.me/7338798973 text=Send20%a20%quote">Whatsapp</a> */}
                </ul>

            </nav>
      </div>
      <div style={{width:'15%', display:'flex', justifyContent:'space-around',alignItems:'center'}}>
      <IoNotifications className='Icons' style={{width:"30px",height:'40px', color:'#002244'}} />
      <a href="https://www.google.com/maps/place/4,+Periyar+Nagar+Main+Rd,+Periyar+Nagar,+Madipakkam,+Chennai,+Tamil+Nadu+600091/@12.9618316,80.1996713,17.35z/data=!4m5!3m4!1s0x3a525dc3315d18ef:0x5fcd76cec036dbf!8m2!3d12.9617575!4d80.1992374?entry=ttu"><FaLocationDot className='Icons' style={{width:"20px",height:'35px', color:'#002244'}} /></a>
      <BiSolidPhoneCall className='Icons'style={{width:"30px",height:'35px', color:'#002244'}} />
      </div>
    </div>

    <Outlet />
    </div>
    
  )
}

export default Nav