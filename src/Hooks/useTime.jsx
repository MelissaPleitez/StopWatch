import React from 'react'
import { useState, useEffect, useRef  } from 'react'


function useTime() {

    
    const [timer, setTimer] = useState(0)
    const [isRunning, setIsRunning] = useState(false);
    const [isStopping, setIsStopping] = useState(false);
   
    const ref = useRef(null);
   
    const watchStart= ()=>{
      //Storing a reference of the interval into ref
      ref.current = setInterval(()=>{
        setTimer((timer)=> timer +1)
      }, 100)

      setIsRunning(true);
      setIsStopping(true);
    }
 
    const watchStop= ()=>{

      clearInterval(ref.current)
      setIsStopping(false);

    }

    const watchReset= ()=>{
      setIsRunning(false);
      setIsStopping(false);
      clearInterval(ref.current)
      setTimer(0)
    }

   


  return {

    watchStart,
    watchStop,
    watchReset,
    timer,
    isRunning,
    isStopping,
    setTimer
   
  };
 
}

export default useTime