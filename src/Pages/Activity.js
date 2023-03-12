import React,{useEffect} from 'react'
import "../styles/Activity.css"
import OneActivity from '../components/OneActivity'
import axios from 'axios'
import {decodeToken} from 'react-jwt'

export default function Activity() {
  const token=localStorage.getItem("studenttoken");
  const decoded = decodeToken(token)
  const [activities, setActivities] = React.useState([])

    useEffect(()=>{
      axios.post('https://sprittle-assignment-server0.vercel.app/api/StudentLog',{
        studentusername:decoded.username
      }).then((res)=>{
        setActivities(res.data)
      })

    },[])


  const colors= ['#0067FF','#CE76FE','#F9DB38','#ED6F71']

  return (
    <div className='ActivityCon'>
      <div className='Activityinside'>
      <p className='masterquesti'>Activity Log</p>
      <div className='Activities'>
      {
        activities.map((data)=>{
          return(
            <OneActivity
            message={data.message}
            parameter1={data.parameter1}
            parameter2={data.parameter2}
            result={data.result}
            operator={data.operator}
            color={'#0067FF'}/>
          )
        })
      }
      </div>
      </div>
    </div>
  )
}
