import ReactPlayer from "react-player";

import logowhite from "./images/logo-white.png";
import bandcamp from "./images/socials/bandcamp.png";
import facebook from "./images/socials/facebook.png";
import instagram from "./images/socials/instagram.png";
import soundcloud from "./images/socials/soundcloud.png";
import spotify from "./images/socials/spotify.png";

import "./App.css";
import CustomSidebar from "./Components/CustomSidebar";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <CustomSidebar />
      </div>
      <img src={logowhite} className="logo" alt="logo" />
      <div className="text">
        <h1>Beatmaker &amp; DJ</h1>
        <h1>Bass music, Halftime, Hip-Hop, House, Funk</h1>
        <h1>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfNC6UlAplGtnFhK9Wq9aknvYrlW-tP7fli00YqIF2cJKOecw/viewform?vc=0&c=0&w=1&flr=0"
            target="_blank"
            rel="noreferrer"
          >
            Booking Request
          </a>
        </h1>
      </div>
      <div className="bottom-row">
        <div className="social">
          <a
            href="https://www.facebook.com/ItsBenanas"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} className="social-icon" alt="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/itsbenanas/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={instagram}
              className="social-icon-insta"
              alt="social-icon"
            />
          </a>
          <a
            href="https://benanas.bandcamp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={bandcamp} className="social-icon" alt="social-icon" />
          </a>
          <a
            href="https://soundcloud.com/benanas"
            target="_blank"
            rel="noreferrer"
          >
            <img src={soundcloud} className="social-icon" alt="social-icon" />
          </a>
          <a
            href="https://open.spotify.com/artist/1Fv8WShM73yWzLV29yoYNg?si=UHm7XAY5RqC9_DdzInk9wA&"
            target="_blank"
            rel="noreferrer"
          >
            <img src={spotify} className="social-icon" alt="social-icon" />
          </a>
        </div>
        <div className="music-player">
          <ReactPlayer
            url="https://soundcloud.com/relativitylounge/the-naughty-list"
            height="10vh"
            width="70vh"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
