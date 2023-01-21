import React, { useEffect } from 'react'
import './App.css'
import io from 'socket.io-client'

const socket = io("http://localhost:3001")

function App() {
  const sendMessage = () =>{
    console.log("clcicked")
    socket.emit("sendmessage",{message: "sskdjnkjsd"},)
    console.log("end")
  }

  useEffect(()=>{
    socket.on("socketid", data => {
      console.log("received")
      console.log(data)
    })
  },[socket])
  return (
    <div>
      <button onClick={sendMessage}>
        Send
      </button>
    </div>
  )
 
}


export default App
