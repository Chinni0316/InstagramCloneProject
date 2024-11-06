import React from "react";
import profileImg from "../assets/27.jpg"
import "../styles/profile.css"
// import "../styles/post.css"
const Profile=()=>{
    return(
      <div className="profile">
            <img src={profileImg}  alt="Profile" className="profile-img"/>
            
      <div className="profile-info">
      <h4 className="profile-username">Ashwini Jarupla</h4>
      <p className="profile-bio">Just another wanderer sharing my journey 🌍✨</p>
      <p className="profile-bio">"Life's a canvas; make it a masterpiece"✨ </p>
      <div className="profile-details">
        <div className="profile-detail-item">
          <h4>20</h4>
          <p>Posts</p>
        </div>
        <div className="profile-detail-item">
          <h4>200</h4>
          <p>Followers</p>
        </div>
        <div className="profile-detail-item">
          <h4>180</h4>
          <p>Following</p>
        </div>
      </div>
   
      <button className="follow-button">Follow</button>
    </div>
            

        </div>
    )
}
export default Profile;
