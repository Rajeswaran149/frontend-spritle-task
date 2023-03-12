import React from 'react'
import "../styles/Nav.css"
import {FiActivity} from 'react-icons/fi'
import {AiFillSetting} from 'react-icons/ai'
import {BiLogOutCircle} from 'react-icons/bi'
import bighead from '../assets/bighead.svg'
import {GiFireDash} from 'react-icons/gi'
import { Link, Navigate } from 'react-router-dom'
import { decodeToken } from 'react-jwt'
import { useNavigate } from 'react-router-dom'


export default function Nav() {
    const token = localStorage.getItem('studenttoken');
    const decoded=decodeToken(token)
    const navigate = useNavigate();
    function Logout() {
        localStorage.removeItem('studenttoken');
        navigate('/StudentLogin')
    }
  return (
    <div className='NavCon'>
        
        <div className='profile'>
            <div className='profilepic'>
                <img src={bighead} width='70px'/>
            </div>
            <div>
                <p className='name'>{decoded.name}(student)</p>
            </div>
        </div>
        <Link className='Navele' to='/StudentHomepage'>
            <GiFireDash className='icon'/>
            <p>Dashbard</p>
        </Link>
        <Link to='/Activity' className='Navele'>
            <FiActivity className='icon'/>
            <p>Activity Log</p>
        </Link>
        
        <div className='Navele' onClick={Logout}>
            <BiLogOutCircle className='icon'/>
            <p>Logout</p>
        </div>
    </div>
  )
}
