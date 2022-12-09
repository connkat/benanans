import logowhite from "./images/logo-white.png";

import "./App.css";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
