// imports
import {useEffect, useState} from "react"
import {io} from "socket.io-client"
import Messages from "../Messages/Messages"
import "./webPage.css"
import SendIcon from '@material-ui/icons/Send';
import $ from "jquery"
import {InputAdornment , IconButton, Input , Typography , TextField , InputLabel, FormControl,StandardInput} from "@material-ui/core"


function Web({username , socket}) {
  const [message , setMiew] = useState("")
  const [messages, setMessages] =  useState([])
  socket.on("response" , miew => {
      
      setMessages(miew)
      setMiew("")
  })

  function addMessage(){
    console.log("here")
    socket.emit("message", [username + ": " + message , username])
  }


  const onSubmit =  (e) => {
    e.preventDefault()
    addMessage()
    var objDiv = document.getElementById("chat");
    objDiv.scrollTop = objDiv.scrollHeight;
  }
  const onInputChange = (e) => {
    setMiew(e.target.value)
  }

  return (
    <div id = "body">
      <div className = "outerContainer">
          <div className = "container"> 
            <div id = "chat">
              <Messages messages = {messages}/>
            </div>

          </div>

          <div  className = "message-input" style = {{background: "white" , padding: "15px"}} >

          <form id = "chat-form" style = {{width: "100%"}}  onSubmit = {onSubmit}>
            
              <FormControl fullWidth style = {{width: "100%"}} variant="standard">
              <TextField
                value={message}
                id = "standard-basic"
                variant="standard"
                onChange={onInputChange}
                endAdornment={<SendIcon type = "submit" />}
                labelWidth={60}
              />
            </FormControl>
        
  
            </form>
          

            </div>   
  
  
      </div>
        
     
    </div>
  );
}

export default Web;
