import React,{useEffect} from 'react'
import StudentPara from '../components/StudentPara'
import { decodeToken } from 'react-jwt'
import axios from 'axios'

export default function HomeMaster() {

  const token = localStorage.getItem('mastertoken')
  const decoded = decodeToken(token)
  const username =decoded.username;
  const [mystudentinputs, setmystudentinputs] = React.useState([])

  useEffect(()=>{
    axios.post('https://sprittle-assignment-server0.vercel.app/api/mystudentinputs',{
      masterusername:decoded.username,
    }).then((res)=>{
      setmystudentinputs(res.data)
    })

  },[])

  
  return (
    <div className='HomeMasterCon'>
        <p className='masterquesti'>Students Inuputs {decoded.username} :</p>

        <div className='studentsparas'>
          {
            mystudentinputs.map((data)=>{
              return(
                <StudentPara 
                id={data._id}
                masterusername={decoded.username}
                studentusername={data.studentusername}
                parameter1={data.parameter1}
                parameter2={data.parameter2}
                operator={data.operator}
                message={data.message}
              
                />
              )
            })
          }
            
        </div>
    </div>
  )
}
