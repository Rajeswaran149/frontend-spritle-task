import React from 'react'
import "../styles/OneActivity.css"
import bighead from '../assets/bighead.svg'
import {TiTickOutline} from 'react-icons/ti'


export default function OneActivity(props) {
 
  return (
    <div className='oneActivityCon' style={{backgroundColor:props.color}}>
        <div className='question'>
            <div>
                <img src={bighead} alt='bighead' width={80}/>

            </div>
            <div className='realques'>
                
                <p>{props.message}</p>
            </div>
            
        </div>
        <div className='result'> 
            <p className='resulttext'><TiTickOutline /> Solved</p>
        </div>
        <div className='sum'>
            <p>{props.parameter1} {props.operator} {props.parameter2} = {props.result}</p>
        </div>
    </div>
  )
}
