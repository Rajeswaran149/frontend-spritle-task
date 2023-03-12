import React,{useState} from 'react'
import "../styles/Questions.css"
import bighead from '../assets/bighead.svg'
import {GrSend} from 'react-icons/gr'
import axios from 'axios'


export default function Question(props) {

  const [parameter1, setParamter1] = useState('')
  const [parameter2, setParamter2] = useState('')
  const [operator,setOperator]=useState('+')

  const sentParameters=()=>{
    const response = axios.post('https://sprittle-assignment-server0.vercel.app/api/studentinputs',{
      studentusername:props.studentname,
      masterusername:props.mastername,
      message:props.questionmsg,
      parameter1:parameter1,
      parameter2:parameter2,
      operator:operator,
  })
  axios.post('https://sprittle-assignment-server0.vercel.app/api/Questiondelete',{
    id:props.id
  })

  setInterval(() => {
    window.location.reload()
  }, 2000);
  }
    
  return (
    <div className='Question'>
        <div className='queinner'>
        <div className='queryprof'>
        <img src={bighead} width='50px'/>
      
        <p className='querymastename'>Master {props.mastername}</p>
        </div>
        <div>
        <p className='mastermsg'>{props.questionmsg}</p>
        </div>
        
        <div className='inputs'>
            <input className='input' onChange={(e)=>{setParamter1(e.target.value)}} placeholder='Enter the 1st parameter'/>
            <input className='input' onChange={(e)=>{setParamter2(e.target.value)}} placeholder='Enter the 2nd parameter'/>
            <input className='input' onChange={(e)=>{setOperator(e.target.value)}} placeholder='Enter the Operator'/>
            <button className='send' onClick={sentParameters}>Send parameters <GrSend /></button>
        </div>
        </div>
    </div>
  )
}
