import React from 'react'

function Chat({messages}) {
    
    return (
        <div id = "body">
            {  messages.map(message => {
                return <p key = {message}> {message} </p>
            })}
        </div>
    )
}


export default Chat