import React,{useEffect,useRef} from 'react'

const AutoScrollChat = () => {
    const bottomRef=useRef(null)

    const messages =[
        "Szia!",
        "Hogy vagy?",
        "Ez egy nagyon hosszú üzenet...",
        "Ez meg egy másik.."
    ]

    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior:"smooth"})
    },[messages])

  return (
    <div
    style={{
        height:150,
        overflowY:"auto",
        border:"1px solid gray",
        padding:10
    }}
    >
        {messages.map((m,i)=>(
            <div key={i}>{m}</div>
        ))}
        <div ref={bottomRef}/>
    </div>
  )
}

export default AutoScrollChat