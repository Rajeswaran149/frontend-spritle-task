import React,{useState} from 'react'
import "../styles/StudentPara.css"
import bighead from '../assets/bighead.svg'
import { one,two,three,four,five,plus,minus,divided_by,times, seven, six, nine, eight, zero } from '../Function/Code';
import axios from 'axios';


export default function StudentPara(props) {
  
  const [result,setResult]=useState('?');
  const [display,setDisplay]=useState('none')

const solve =()=>{
  let firstfunction;
  let secondfunction;
  let thirdfunction;
  //First parameter
  if(props.parameter1 === '7'){
    firstfunction=seven;
  }
  else if(props.parameter1 === '0'){
    firstfunction=zero;
  }
  else if(props.parameter1 === '1'){
    firstfunction=one;
  }
else if(props.parameter1 === '2'){
  firstfunction=two;
}
else if(props.parameter1 === '3'){
  firstfunction=three;
}
else if(props.parameter1 === '4'){
  firstfunction=four;
}
else if(props.parameter1 === '5'){
  firstfunction=five;
}
else if(props.parameter1 === '6'){
  firstfunction=six;
}
else if(props.parameter1 === '8'){
  firstfunction=eight;
}
else if(props.parameter1 === '9'){
  firstfunction=nine;
}
  //Second parameter
  if(props.operator === '-'){
    secondfunction=firstfunction(minus)
  }
  else if(props.operator === '+'){
    secondfunction=firstfunction(plus)
  }
  else if(props.operator === '*'){
    secondfunction=firstfunction(times)
  } 
else if(props.operator === '/'){
  secondfunction=firstfunction(divided_by)
}
  //third parameter
  if(props.parameter2 === '1'){
    thirdfunction=secondfunction(one())
    setResult(thirdfunction)
  }
  else if(props.parameter2 === '0'){
    thirdfunction=secondfunction(zero());
    setResult(thirdfunction)
  }
  else if(props.parameter2 === '2'){
    thirdfunction=secondfunction(two())
    setResult(thirdfunction)
  }
else if(props.parameter2 === '3'){
    thirdfunction=secondfunction(three())
    setResult(thirdfunction)
  }
else if(props.parameter2 === '4'){
    thirdfunction=secondfunction(four())
    setResult(thirdfunction)
  }
else if(props.parameter2 === '5'){
    thirdfunction=secondfunction(five())
    setResult(thirdfunction)
  }
else if(props.parameter2 === '6'){
    thirdfunction=secondfunction(six())
    setResult(thirdfunction)
  }
else if(props.parameter2 === '7'){
    thirdfunction=secondfunction(seven())
    setResult(thirdfunction)
  }
else if(props.parameter2 === '8'){
    thirdfunction=secondfunction(eight())
    setResult(thirdfunction)
  }
else if(props.parameter2 === '9'){
    thirdfunction=secondfunction(nine())
    setResult(thirdfunction)
  }

  setDisplay('block')

  
}

const AddtoLog=()=>{
  axios.post('https://backend-spritle-task.vercel.app/api/AddActivity',{
    studentusername:props.studentusername,
    masterusername:props.masterusername,
    message:props.message,
    parameter1:props.parameter1,
    parameter2:props.parameter2,
    operator:props.operator,
    result:result.toString()
  })

  axios.post('https://backend-spritle-task.vercel.app/api/delelte/StudnetPara',{
    id:props.id
  })

  setInterval(() => {
    window.location.reload()
  }, 2000);
}
  return (
    <div className='studentparacon'>
       <div className='question'>
            <div>
                <img src={bighead} alt='bighead' width={80}/>

            </div>
            <div className='realques'>
              <div className='ques'> 
                <p>Question @{props.studentusername}</p>
                
              </div>
                <p>{props.message}</p>
                
            </div>
            
        </div>
        <div className='result'> 
            <p>Parameters</p>
        </div>
        <div className='sum'>
            <p className="paramers">{props.parameter1} {props.operator} {props.parameter2} = {result}</p>
            <button className='solvebtn' onClick={solve}>Click to solve</button>
            
            <button className='Addsolvebtn' onClick={AddtoLog} style={{display:display}} >Add to log</button>
        </div>
        
    </div>
  )
}
