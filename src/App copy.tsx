import React, { useEffect } from 'react'
import './App.css'
// import phaserGame from './PhaserGame'
import Start from './components/start'
import io from 'socket.io-client'

// const io = require('socket.io-client')
const socket = io("http://localhost:8000")

// import '../App.css'
// import logo from './logo.svg'

type Props = {
  userId: number
  enabled: boolean
  onConnected?: () => void
}

const useWebSockets = ({userId, enabled, onConnected} : Props) =>{
  socket.on("connect",()=>{
    console.log('connection found')
  })
}
function App() {
  useEffect(()=>{
    console.log("running")
    socket.on("connect",()=>{
      console.log('connection found')
      socket.on("welcome", (data)=>{
        console.log("data")
      }) 
      socket.emit("response","receieved")
    })
    socket.emit("response","receieved")

    socket.on('welcome', (data)=>{
      console.log("data")
    }) 

    return ()=>{
      socket.off('connect')
    }
    
  })
  
  return (
      <Start />  
  )
}


export default App
