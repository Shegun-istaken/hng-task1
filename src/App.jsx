import avatar from "./assets/avatar-default.jpg";
import camera from "./assets/camera.svg";
import github from "./assets/github.svg";
import zuri from "./assets/zuri.svg";
import i4g from "./assets/I4G.svg";
import slack from "./assets/slack.svg";

function Avatar() {
  return (
    <div className="avatar">
      <img src={avatar} alt="user's profile" />
    </div>
  );
}

const info = [
  {
    link: "https://www.twitter.com",
    text: "Twitter Link",
  },
  {
    link: "https://www.zuri.com",
    text: "Zuri Team",
  },
  {
    link: "https://www.zuribooks.com",
    text: "Zuri Books",
  },
  {
    link: "https://www.python.com",
    text: "Python Books",
  },
  {
    link: "https://www.coders.com",
    text: "Background Check for Coders",
  },
  {
    link: "https://www.DesignBooks.com",
    text: "Design Books",
  },
];

function Links({ link, text }) {
  return (
    <a href={link} className={"links"}>
      {text}
    </a>
  );
}

function App() {
  return (
    <div className="app">
      <header>
        <Avatar />
        <h2>Annete Black</h2>
      </header>
      <main>

        {
        info.map((item, index) => (
          <Links key={index} text={item.text} link={item.link} />
          ))
        }

        <div className="socials">
          <img src={slack} alt="slack logo" />
          <img src={github} alt="github logo" />

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
