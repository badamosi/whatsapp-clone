import React, {useState, useEffect} from 'react'
import { Avatar } from '@material-ui/core'
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';

import './css/SidebarChat.css'

function SidebarChat() {

    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        setAvatar(Math.floor(Math.random() * 5000))
    }, [])
    return (
        <div className="sidebar-chat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${avatar}.svg`} />
            <div className="chat-info">
                <div className="top">
                    <h2 className="room-name">HFDI Obalouwa</h2>
                    <span>Yesterday</span>
                </div>
                <div className="bottom">
                    <DoneAllOutlinedIcon />
                    <p>pls bear with me, it shall be fixed by Saturday</p>
                    <span className="msg_count">2</span>
                </div>
            </div>
        </div>
    )
}

export default SidebarChat
