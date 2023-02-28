import React from 'react'
import useTime from '../Hooks/useTime';
import { MdQueryBuilder } from "react-icons/md";
import './cronometer.css';


function Cronometer() {

  const {watchStart, watchStop, watchReset,timer, isRunning, isStopping, setTimer} = useTime();

  const time = (timer)=>{

    const seconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `0${Math.floor(timer / 60) % 60}`.slice(-2)
    const hours= `0${Math.floor(timer/3600)}`.slice(-2)

    return `${hours} : ${minutes} : ${seconds}`;

  }

  

   const getNumer=(e)=>{

    if(e.target.value==watchStart){
        alert('Stop!')

    }

     
   }

  return (
    <div className='container'>

      <div className='stopWatch'>
      
      <h1>StopWatch <MdQueryBuilder /> </h1>

        { 

          <h3>Time: {time(timer)}</h3> 

        }
      
      </div>
      <div className='bodyWatch'>
        {
            !isRunning && !isStopping?
           <button  onClick={watchStart}>Start</button>
           :(
            
            isStopping? <button onClick={watchStop}>Stop</button>:

            <button  onClick={watchStart}>Resume</button>
           )

        }
          <button onClick={watchReset} disabled={!isRunning}>Restart</button>
      </div>
      <div>
        Set Your Time: <input type='time' onChange={getNumer} />

        <button>Set</button>
         </div>
         </div>



  )
}

export default Cronometer