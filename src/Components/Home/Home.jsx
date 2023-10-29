import Navbar from "./Navbar/Navbar";
import ProfileContainer from "./Profile/ProfileContainer";
import "./home.css";

function Home() {
  return (
    <div id="home" className="home">
      <Navbar />
      <ProfileContainer></ProfileContainer>
    </div>
  );
}

export default Home;
