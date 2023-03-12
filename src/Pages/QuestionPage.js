import React,{useState,useEffect} from 'react'
import "../styles/QuestionPage.css"
import axios from 'axios'
import {decodeToken} from 'react-jwt'

export default function QuestionPage() {
  const [message,setMessage] = useState("")
  const [student,setStudent] = useState("")
  const [students,setStudents] = useState([])
  const token = localStorage.getItem("mastertoken")
  const decoded= decodeToken(token)


  useEffect(()=>{
        const response=  axios.get("https://sprittle-assignment-server0.vercel.app/api/students")
        .then((res)=>{
            setStudents(res.data)
        }).then(()=>{
            console.log(students)
        })
      
  },[])
  
  const handleAsk=()=>{
    axios.post('https://sprittle-assignment-server0.vercel.app/api/question',{
        masterusername:decoded.username,
        studentusername:student,
        message:message
        
    }).then(()=>{
        console.log("sucess")
    })

    setInterval(() => {
        window.location.reload()
      }, 2000);
  } 
  
  return (
    <div className='QuestionenterCon'>
        <div className='questiondes'>
            <p className='Quesiondote'>Questions</p>
            <span className='Quesiondotedes'>Nice text goes here to explain the question creation part like never before</span>
        </div>
        <div className='Questionmain'>
            <p className='createtxt'>Create Question</p>
            <div>
                <p>Question message</p>
                <textarea className='questioninput' onChange={(e)=>{setMessage(e.target.value)}} type="text" placeholder="Question message" />
            </div>
            <div>
                <p>Type your student's username</p>
                <select className='studentselect' onChange={(event) => setStudent(event.target.value)}>
                    <option value=''>Select a student</option>
                    {
                        students.map((student)=>{
                            return(
                                <option value={student.username}>{student.username}</option>
                            )
                            
                        })
                    }
                </select>
            </div>
            <br />
            <div>
                <button onClick={handleAsk}>Ask to {student}</button>
            </div>
        </div>
    </div>
  )
}
