import React from 'react'
import ChatBox from './ChatBox'
import { Avatar, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './css/ChatPanel.css'

function ChatPanel() {
    return (
        <div className="chat-panel">
            <div className="header">
                <div className="user">
                    <Avatar src="https://avatars.dicebear.com/api/human/afadfa.svg" />
                    <p>Majeed <br /> <span>Online</span> </p>
                </div>
                <div className="controls">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat-body">
                <p className="chat-message">
                    Hello, Good Morning
                    <span className="time-stamp">10:30 pm</span>
                </p>
                <p className="chat-message chat-reciever">
                    Hello, Good Morning
                    <span className="time-stamp">10:30 pm</span>
                </p>
                <p className="chat-message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo mollitia veniam fuga earum expedita ullam soluta. Delectus, vero quam, dolores nesciunt sint beatae facilis est, error harum pariatur numquam optio.
                    <span className="time-stamp">10:30 pm</span>
                </p>
                <p className="chat-message chat-reciever">
                    Hello, Good Morning
                    <span className="time-stamp">10:30 pm</span>
                </p>
                <p className="chat-message">
                    Hello, Good Morning
                    <span className="time-stamp">10:30 pm</span>
                </p>
                <p className="chat-message chat-reciever">
                    Hello, Good Morning
                    <span className="time-stamp">10:30 pm</span>
                </p>
                <p className="chat-message">
                    Hello, Good Morning
                    <span className="time-stamp">10:30 pm</span>
                </p>
                <p className="chat-message chat-reciever">
                    Hello, Good Morning
                    <span className="time-stamp">10:30 pm</span>
                </p>
                <p className="chat-message">
                    Hello, Good Morning
                    <span className="time-stamp">10:30 pm</span>
                </p>
                <p className="chat-message chat-reciever">
                    Hello, Good Morning
                    <span className="time-stamp">10:30 pm</span>
                </p>
            </div>
            <ChatBox/>
        </div>
    )
}

export default ChatPanel
