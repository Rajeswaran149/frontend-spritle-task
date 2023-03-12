import React from 'react'
import "../styles/Nav.css"
import {FiActivity} from 'react-icons/fi'
import {AiFillSetting} from 'react-icons/ai'
import {BiLogOutCircle} from 'react-icons/bi'
import bighead from '../assets/bighead.svg'
import {GiFireDash} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { decodeToken } from 'react-jwt'
import { useNavigate } from 'react-router-dom'
import {GoQuestion} from 'react-icons/go'

export default function NavMaster() {
    const token = localStorage.getItem('mastertoken')
  const decoded = decodeToken(token)
  const navigate = useNavigate()

  const Logout=()=>{
    localStorage.removeItem('mastertoken')
    navigate('/MasterLogin')
  }
  return (
    <div className='NavCon'>
        
        <div className='profile'>
            <div className='profilepic'>
                <img src={bighead} width='70px'/>
            </div>
            <div>
                <p className='name'>{decoded.name}(Master)</p>
            </div>
        </div>
        <Link className='Navele' to='/MasterHome'>
            <GiFireDash className='icon'/>
            <p>Dashbord</p>
        </Link>
        <Link to='/MasterActivity' className='Navele'>
            <FiActivity className='icon'/>
            <p>Activity Log</p>
        </Link>

        <Link to='/Question' className='Navele'>
            <GoQuestion className='icon'/>
            <p>Ask to student</p>
        </Link>
        
        <div className='Navele' onClick={Logout}>
            <BiLogOutCircle className='icon'/>
            <p>Logout</p>
        </div>
    </div>
  )
}
