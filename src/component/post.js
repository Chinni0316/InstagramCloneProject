import React from "react";
import dot from "../assets/more.png";
import person from "../assets/quote.jpeg";
import like from "../assets/heart.png";
import message from "../assets/massege.png";
import sent from "../assets/send.png";
import save from "../assets/bookmark.png";
import "../styles/post.css"
const Post=({username,description})=>{
    return(
    <div className="post">
      <div className="box">
       <div className="post-header">
          <img src={person} alt={username} className="post-profile-img" />
        <div>
          <span className="post-username">{username}</span>
          <span className="post-time">• 1d</span>
          <p className="post-description">{description}</p>
        </div>
          <img src={dot} alt="more options" className="post-options-icon" />
        </div>
        <img src={person} alt="Post" className="post-image" />
        <div className="post-actions">
          <img src={like} alt="like" className="action-icon" />
          <img src={message} alt="comment" className="action-icon" />
          <img src={sent} alt="share" className="action-icon" />
          <img src={save} alt="save" className="action-icon" />
        </div>
      </div>
      

    </div>
    )
}
export default Post;
