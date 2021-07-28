
import React from 'react';
import {useState} from "react"
import Message from './Message/Message';
import ScrollableFeed from 'react-scrollable-feed'

import './Messages.css';

function Messages({messages}){
    let top = 7
    return (
            <> 

                  {messages.map((message, i) =>
                  { top += 7
                  return <div className ="bubble" key = {i} style = {{top:  `${top}%` }}>{message[0]} </div> })}
            </>


    )
 };

export default Messages;