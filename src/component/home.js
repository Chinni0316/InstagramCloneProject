import React from "react";
import SideBar from "./sidebar";
import Post from "./post";
import Profile from "./profile";
import "../styles/home.css"

const Home=()=>{
  return(
    <div className="main">
      <div className="side">
      <SideBar/>
      </div>
      
      <div className="posts">
        <Post username="Melodics" description="Beast Inside Beats • Vibes"/>
        <Post  username="chini_1" description="Exploring the world"/>
        <Post username="Melodics" description="Beast Inside Beats • Vibes"/>
        <Post  username="sony_16" description="Exploring the world"/>
        <Post username="Melodics" description="Beast Inside Beats • Vibes"/>
        <Post  username="Pravu_12" description="Exploring the world"/>

      </div>
      <Profile/>

    </div>
  )
}
export default Home;