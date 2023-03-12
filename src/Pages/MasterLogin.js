import React from 'react'
import "../styles/MasterLogin.css"
import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function MasterLogin() {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const navigate = useNavigate();
     
    const handleLogin = async(e) => {
        e.preventDefault()
        const response = await axios.post('https://sprittle-assignment-server0.vercel.app/api/masterLogin', {
            email:email,
            password:password
    })
    if(response.status===200){
        localStorage.setItem("mastertoken",response.data.mastertoken)
        navigate('/MasterHome')
      }
      else{
        navigate('/masterlogin')

        window.location.reload()
      }
    }

  return (
    <div className='MasterLoginCon'>
        <div className='Logininside'>
        <div className='description'>
            <p className='hello'>Hello Master 👋🏼</p>
            <span className='hellodec'>Welcome back , you've been missed</span>
        </div>
        <div className='inputs'>
            <div>
                
                <input className='credentialinput' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/>
            </div>
            <div>
                
                <input className='credentialinput'  onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter your Password'/>
            </div>    
        </div>
        <div>
            <button onClick={handleLogin} className='loginbtn'>Log in</button>
        </div>
        
        <p className='registerquo' >Dont have register yet? <span className='registerflow'><Link to='/MasterRegister'>Register now</Link></span></p>
        </div>
    </div>
  )
}
