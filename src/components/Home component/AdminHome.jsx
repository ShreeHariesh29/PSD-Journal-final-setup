import React from 'react'
import Banner1 from './Homeimg/Banner1.jpg'
import Banner2 from './Homeimg/Banner2.jpg'
import Banner3 from './Homeimg/Banner3.jpg'
import './Home.css'

function AdminHome() {
  return (
    <div>
        <div style={{width:'100%', height:'400px',display:'flex', justifyContent:'space-between'}}>
            <div className='banner1' >
            </div>
            <div style={{width:'40%', display:'block'}}>
                <div className='banner2'></div>
                <div className='banner3'></div>
            </div>
            
        </div>
        <h3 style={{textAlign:'center'}}>The Lifeline of All medical and Dental Colleges: The Significance of <br /> PSD Journals & Periodicals</h3>
    </div>
  )
}

export default AdminHome