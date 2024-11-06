import React from "react";
import instagram from "../assets/instagram-text-icon.png";
import homeIcon from "../assets/home.png";
import searchIcon from "../assets/loupe.png";
import exploreIcon from "../assets/compass.png";
import reelIcon from "../assets/reel.png";
import chatIcon from "../assets/chat.png";
import likeIcon from "../assets/heart.png";
import createIcon from "../assets/add.png";
import profileIcon from "../assets/27.jpg";
import threadsIcon from "../assets/threads.png";
import moreIcon from "../assets/menu.png";
import "../styles/sidebar.css"

const SideBar=()=>{
    const menuItems=[
        {icon:homeIcon,label:"Home"},
        {icon:searchIcon,label:"Search"},
        {icon:exploreIcon,label:"Explore"},
        {icon:reelIcon,label:"Reels"},
        {icon:chatIcon,label:"Messages"},
        {icon:likeIcon,label:"Notifications"},
        {icon:createIcon,label:"Create"},
        {icon:profileIcon,label:"Profile"},
        {icon:threadsIcon,label:"Threads"},
        {icon:moreIcon,label:"More"},
    ];

    return(
        <div className="sidebar">
           <img src={instagram} alt="Instagram" className="instagram-logo"/>
              {
                menuItems.map((item,index)=>{
                    return(
                        <div className="menu-item" key={index}>
                            <img src={item.icon} alt={item.label} className="menu-icon"/>
                            <span>{item.label}</span>
                            
                        </div>
                    )
                })
              }
        </div>
    )
}
export default SideBar;