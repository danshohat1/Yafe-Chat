import React from 'react'

function Message({username, text}) {
    const trimmedName = window.sessionStorage.getItem("username")
    let isSentByCurrentUser = false;
    if (trimmedName === username){
      isSentByCurrentUser = true;
    }
    return (
        isSentByCurrentUser
        ? (
          <div className="messageContainer justifyEnd">
            <p className="sentText pr-10">{trimmedName}</p>
            <div className="messageBox backgroundBlue">
              <p className="messageText colorWhite">{text}</p>
            </div>
          </div>
          )
          : (
            <div className="messageContainer justifyStart">
              <div className="messageBox backgroundLight">
                <p className="messageText colorDark">{text}</p>
              </div>
              <p className="sentText pl-10 ">{username}</p>
            </div>
          )
    )
      
}


export default Message;