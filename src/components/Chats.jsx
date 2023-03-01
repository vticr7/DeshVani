import React from "react";

const Chats = () => {
    return(
    <div className="chats">
        <div className="userChat">
            <img src="https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
            <div className="userChatInfo">
                <span>Vanshagra</span>
                <p>Hello World!</p>
            </div>
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
            <div className="userChatInfo">
                <span>Aditya</span>
                <p>How Are You?</p>
            </div>
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
            <div className="userChatInfo">
                <span>Abhay</span>
                <p>Can We Play?</p>
            </div>
        </div>
    </div>
    )
        
}

export default Chats