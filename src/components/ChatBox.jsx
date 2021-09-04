import React, { useState } from 'react';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import './css/ChatBox.css'

function ChatBox() {

    const [message, setMessage] = useState("")
    const handleInput = (e) => {
        // alert(e.target.value)
        // let name = e.target.name;
        let value = e.target.value;
        setMessage(value)
    }

    return (
        <div className="chatbox">
            <SentimentSatisfiedOutlinedIcon />
            <AttachFileOutlinedIcon />
            <div className="message-box">
                <input type="text" value={message} onChange={handleInput} placeholder="Type a message" />
            </div>
            <MicOutlinedIcon/>
        </div>
    )
}

export default ChatBox
