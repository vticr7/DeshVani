import React, { useContext } from "react";
// import Cam from "../img/cam.png";
// import Add from "../img/add.png";
// import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
const Chat = () => {
    const { data } = useContext(ChatContext);
    return(
    <div className="chat"> 
        <div className="chatInfo">
            <span>{data.user?.displayName}</span>
            <div className="chatIcons">
                <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/cam.png" alt="" srcset="" />
                <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/add.png" alt="" srcset="" />
                <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/more.png" alt="" srcset="" />
            </div>
        </div>
        <Messages/>
        <Input/>
     </div>
    )
        
}

export default Chat