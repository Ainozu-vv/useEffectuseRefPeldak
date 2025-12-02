import React,{useState,useRef,useEffect} from 'react'

const Stopwatch = () => {
    const [seconds,setSeconds]=useState(0)
    const intervalRef=useRef(null)

    const start=()=>{
        if (intervalRef.current) return; //már fut

        intervalRef.current=setInterval(()=>{
            setSeconds(s=>s+1)
        },1000)
    }

    const stop =()=>{
        clearInterval(intervalRef.current)
        intervalRef.current=null
    }

    const reset=()=>{
        stop()
        setSeconds(0)
    }

    useEffect(()=>stop,[])//kilépéskor leállítja!!!

  return (
    <div>
        <p>{seconds} másodperc</p>
        <div onClick={start}>Start</div>
        <div onClick={stop}>Stop</div>
        <div onClick={reset}>Reset</div>
    </div>
  )
}

export default Stopwatch