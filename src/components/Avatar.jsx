import avatar from "../assets/images/avatar-default.jpg";

function Avatar() {
    return (
      <div className="avatar">
        <img src={avatar} alt="user's profile" id="profile__img" />
      </div>
    );
  }
  
 export default Avatar; 