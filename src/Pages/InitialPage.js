import React from 'react'
import "../styles/InitialPage.css"
import master from '../assets/master.png'
import { Link } from 'react-router-dom'

export default function InitialPage() {
  return (
    <div className='initialPageCon'>
        <div className='view'>
            <img src={master} width='200px'/>
            <p className='titlehead'>Master student application</p>
            
            <p>-->Assignment @Spritle</p>
        </div>
        <div className='logins'>
        <Link to='MasterLogin'>
        <button className='loginbtn' > Master login</button>
        </Link>
        <br />
        <Link to='/StudentLogin'>
        <button className='loginbtn' > Student login</button>
        </Link>
        </div>
        
    </div>
  )
}
