import Avatar from "./components/Avatar";
import Links from "./components/Links";

import {info, profile} from "./assets/data";
import github from "./assets/images/github.svg";
import zuri from "./assets/images/zuri.svg";
import i4g from "./assets/images/I4G.svg";
import slack from "./assets/images/slack.svg";
import slack1 from "./assets/images/slack1.svg";
import twitter from "./assets/images/twitter.svg";


function App() {
  return (
    <div className="app">
      <header>
        <Avatar />
        <h2>Shegun Samuel</h2>
        <div className="profileIcons">
          <img src={twitter} alt="twitter icon" />
          <a href={`https://www.twitter.com${profile.twitter}`} id="twitter" target="_blank" rel="noreferrer">
            {profile.twitter}
          </a>
        </div>
        <div className="profileIcons" style={{ display: "none" }}>
          <img src={slack1} alt="dark background icon" />
          <a href={`https://www.slack.com${profile.slack}`} id="slack" target="_blank" rel="noreferrer">
            {profile.slack}
          </a>
        </div>
      </header>
      <main>
        {info.map((item, index) => (
          <Links key={index} text={item.text} link={item.link} subtext={item?.subtext} />
        ))}

        <div className="socials">
          <a href="https://www.slack.com" target="_blank" rel="noreferrer">
            <img src={slack} alt="slack logo" />
          </a>
          <a href="https://www.github.com/shegun-istaken" target="_blank" rel="noreferrer">
            <img src={github} alt="github logo" />
          </a>
        </div>
      </main>

      <footer>
        <img src={zuri} alt="Zuri Logo" />
        <p>HNG Internship 9 Frontend Task</p>

        <img src={i4g} alt="I4G logo" />
      </footer>
    </div>
  );
}

export default App;
