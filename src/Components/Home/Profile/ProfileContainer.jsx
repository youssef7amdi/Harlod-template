import ProfileInfo from "./ProfileInfo";
import ProfileImg from "./ProfileImg";

import "./profile.css";

function ProfileContainer() {
  return (
    <div className="container profile-container">
      <ProfileInfo />
      <ProfileImg />
    </div>
  );
}

export default ProfileContainer;
