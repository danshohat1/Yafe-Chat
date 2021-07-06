// imports
import {useState} from "react"
import {io} from "socket.io-client"
import Chat from "./Chat"



function Web({username}) {
  const [massage , setMiew] = useState("")
  const [messages , setMessage] = useState([])

  const socket = io("http://localhost:5000" , {transports : ["websocket"]})
  socket.on("response" , miew => {
    setMessage(miew)
  })

  function addMessage(){
    socket.emit("message", username + ": " + massage)
  }


  const onSubmit =  (e) => {
    e.preventDefault()
    addMessage()
  }
  const onInputChange = (e) => {
    setMiew(e.target.value)
  }

  return (
    <>
      <form onSubmit = {onSubmit}>
        <input placeholder = "Enter Massage" value = {massage} onChange = {onInputChange}/>
        <button type = "submit"> Submit </button>
      </form>
      <Chat messages = {messages} />
    </>
  );
}

export default Web;
