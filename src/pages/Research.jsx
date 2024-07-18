import React, { useRef } from 'react'
import { useState } from 'react';
import axios from 'axios';
import UploadFile from '../components/elements/UploadFile';
function Research() {

  // const jsonData = [
  //   {
  //     id: 1,
  //     name: 'John Doe',
  //     email: 'john@example.com',
  //   },
  //   {
  //     id: 2,
  //     name: 'Jane Smith',
  //     email: 'jane@example.com',
  //   },
  //   {
  //     id: 3,
  //     name: 'Jane Smith',
  //     email: 'jane@example.com',
  //   },
  //   {
  //     id: 4,
  //     name: 'Jane Smith',
  //     email: 'jane@example.com',
  //   },
  //   {
  //     id: 5,
  //     name: 'Jane Smith',
  //     email: 'jane@example.com',
  //   },
  //   {
  //     id: 6,
  //     name: 'Jane Smith',
  //     email: 'jane@example.com',
  //   },
  //   {
  //     id: 7,
  //     name: 'Jane Smith',
  //     email: 'jane@example.com',
  //   },
  //   {
  //     id: 8,
  //     name: 'Jane Smith',
  //     email: 'jane@example.com',
  //   },
  //   {
  //     id: 9,
  //     name: 'Jane Smith',
  //     email: 'jane@example.com',
  //   },
  //   {
  //     id: 10,
  //     name: 'Jane Smith',
  //     email: 'jane@example.com',
  //   },
  //   {
  //     id: 11,
  //     name: 'Jane Smith',
  //     email: 'jane@example.com',
  //   },
  //   {
  //     id: 12,
  //     name: 'Jane Smith',
  //     email: 'jane@example.com',
  //   },
  //   {
  //     id: 13,
  //     name: 'Jane Smith',
  //     email: 'jane@example.com',
  //   },
  //   {
  //     id: 14,
  //     name: 'Jane Smith',
  //     email: 'jane@example.com',
  //   },
    
  // ];

  // const [currentPage, setCurrentPage] = useState(1);

  // const recordsperPage = 4;
  // const lastIndex = currentPage * recordsperPage;
  // const firstIndex = lastIndex -  recordsperPage;
  // const records =  jsonData.slice(firstIndex,lastIndex);
  // const npages = Math.ceil(jsonData.length / recordsperPage);
  // const numbers = [...Array(npages +1).keys()].slice(1);

  // const [menucolor, setMenuColor]= useState();

  // function colorchange(){
  //   setMenuColor(!menucolor)
  // }
  // const Style = {
  //   backgroundColor : menucolor ? 'blue' : 'white',

  // }




  // const [name, setName] = useState("")
  // const [role, setRole] = useState("")
  // async function input(e){
  //   e.preventDefault();
  //   fetch('http://localhost:1000/customerDetail',{
  //     method:'POST',
  //     headers:{
  //       'Content-Type':'application/json',
  //     },
  //     body : JSON.stringify({
  //       name,
  //       role,
  //     }),
  //   })
  // }



  const [name , setName] =useState();
  const [email, setEmail] = useState();
  const [mobileno, setMobileNo] = useState();
  const [queries, setQueries] = useState();

  
  async function CustomerDetails (e) {
    e.preventDefault();
    fetch('http://localhost:1000/CustomerDetails',{
      method:'Post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name,
        email,
        mobileno,
        queries,
        
      }),
    });

  }
  const[journalname, setJournalName] = useState([]);
  const[oderinput, setOderInput] = useState();
  const Oderdata = useRef();

  const saveOderlist =()=>{
    setOderInput(Oderdata.current.files[0])
  }
  const uploadorderfile = async () =>{
    const formdata = new FormData();
    formdata.append('file',oderinput);
    axios.post('http://localhost:1000/placeOder', formdata)
    .then ( res => console.log(res))
    .catch (err => console.log(err))
  }



 const[journalImg, setJournalImg] = useState()
 const fileInput = useRef();

 const[file, setFile] = useState();

  const saveFile =()=>{
    setFile(fileInput.current.files[0])
    // setFileName(fileInput.current.files[0].name)
   }
  
   const UploadImg = async () =>{
    const formData = new FormData();
    formData.append('file',file);
    // formData.append('fileName',fileName);
    axios.post('http://localhost:1000/placeOder', formData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  
  
   }





  return (
    
    <div style={{marginBottom:'10%',paddingTop:'80px'}}>
       {/* <div className="App">
      <header className="App-header"> 
        <div className="logIn-form">
            <form onSubmit={input}>
                <p>First Name</p>

                <input
                  name= "name"
                  type="text"
                  placeholder="First name ..."
                  onChange={(e) => {setName(e.target.value)}}
                />

                <p> Company Role</p>

                <input 
                  name = "role"
                  type="text"
                  placeholder = "Role...." 
                  onChange={(e) => {setRole(e.target.value)}}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
      </header>
    </div> */}

    <h1 style={{textAlign:'center', marginTop:'5%'}}>Place your orders</h1>
    <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
    <div style={{width:'50%',height:'400px',borderRadius:'5px',display:'flex',justifyContent:'space-between',border:'1px solid gray'}}>
      <div >
      <form  onSubmit={CustomerDetails} style={{marginLeft:'20%',width:'250px',height:'80%',marginTop:'10%'}} >
        <p>Please update your details</p>
        <label style={{}}>Name:</label> <br />

        <input style={{width:'200px',height:'30px',marginTop:'10px'}} type="text" name="name" placeholder="First name ..."  onChange={(e) => {setName(e.target.value)}} /> <br />
        <label>Email:</label> <br />
        <input style={{width:'200px',height:'30px',marginTop:'10px'}} type="text" name='email' onChange={(e)=>{setEmail(e.target.value)}} /> <br />
        <label>Mobile Number:</label> <br />
        <input style={{width:'200px',height:'30px',marginTop:'10px'}} type="text" name='mobileno' onChange={(e)=>{setMobileNo(e.target.value)}} /> <br />
        <label>Any Quires:</label> <br />
        <input style={{width:'200px',height:'30px',marginTop:'10px'}} type="text"  name='queries' onChange={(e)=>{setQueries(e.target.value)}}  /> <br />
        <label>List of products:</label> <br />
        <input  style={{width:'60%', marginTop:'10px'}} type="file" ref={fileInput} onChange={saveFile} /> 
        <button onClick={UploadImg}>Upload Img</button>

        {/* <input type="file"  name='oderlist' ref={Oderdata} onChange={saveOderlist}  /> */}
        <button style={{width:'150px',height:'30px',borderRadius:'5px',border:'1px solid gray',backgroundColor:'blue', color:'white',marginLeft:'10%'}} type='submit' >Submit</button>
      </form>
      </div>
      <div style={{width:'50%',height:'100%',backgroundColor:'blue'}}>
        <div>
          <p style={{color:'white'}}>Place Your oder by filling the required data</p>
        </div>
      </div>
    </div>
    </div>

    </div>
    
    // <div>
    //   <table>
    //     <tbody>
    //     {records.map((item) => (
    //         <tr key={item.id}>
    //           <td> <div>
    //             <div style={{display:'flex',width:'70vw',height:'100px',border:'gray 1px solid'}}>
    //               <h1 style={{padding:'15px'}}>{item.id}</h1>
    //             <h1 style={{padding:'15px'}}>{item.name}</h1>
    //             <h1 style={{padding:'15px'}}>{item.email}</h1>
    //             </div>
               
    //             </div></td>
    //         </tr>
    //       ))}
          
    //     </tbody>
    //   </table>
    //   <nav >
    //     <ul style={{display:'flex',listStyle:'none'}}>
    //       <li >
    //         <a style={{textDecoration:'none',padding:'10px',color:'black'}} href="#" onClick={prepage}>Prev</a>
    //       </li>
    //       {
    //         numbers.map((n,i) =>(
         
    //             <button className={`page-item ${currentPage === n ? 'active':''}`} style={Style} href="#" onClick={()=> {changeCpage(n); colorchange()}}>{n}</button>

    //         ))
    //       }
    //       <li>
    //         <a  style={{textDecoration:'none',padding:'10px',color:'black'}} href="#" onClick={nextpage}>Next</a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  )
  // function nextpage() {
  //   if (currentPage !== npages){
  //     setCurrentPage(currentPage +1)
  //   }
  // }
  // function changeCpage(id){
  //   setCurrentPage(id);
  // }
  // function prepage(){
  //   if(currentPage !== 1){
  //     setCurrentPage(currentPage -1)
  //   }
  // }
  
}

export default Research