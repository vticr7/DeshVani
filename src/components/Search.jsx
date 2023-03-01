import React from "react";

const Search = () => {
    return(
    <div className="search"> 
        <div className="searchForm">
            <input type="text" placeholder="Find a User" />
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
            <div className="userChatInfo">
                <span>Vaibhav</span>
            </div>
        </div>
     </div>
    )
        
}

export default Search