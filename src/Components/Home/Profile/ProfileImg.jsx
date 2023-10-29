import { profile } from "../../../constants/images";

function ProfileImg() {
  return (
    <div className="profile-img">
      <div className="img-bg"></div>
      <img src={profile} alt="Error" />
    </div>
  );
}

export default ProfileImg;
