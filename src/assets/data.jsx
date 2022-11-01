import avatar from "./images/avatar-default.jpg";

const profile = {
    avatar: { avatar },
    twitter: "shegunius",
    slack: "shegunius",
  };
  
const info = [
    {
      link: "https://www.twitter.com/hnginternship",
      text: "Twitter Link",
    },
    {
      link: "https://training.zuri.team/",
      text: "Zuri Team",
      id: "btn__zuri",
    },
    {
      link: "http://books.zuri.team",
      text: "Zuri Books",
      id: "books",
      subtext: "Get the best books on Design and Coding here",
    },
    {
      link: `https://books.zuri.team/python-for-beginners?ref_id=${profile.slack}`,
      text: "Python Books",
      id: "book__python",
      subtext: "Learn Python with a guided learning path with Python for Beginners"
    },
    {
      link: "https://background.zuri.team",
      text: "Background Check for Coders",
      id: "pitch",
      subtext: "Get a fast background check on coders so you hire only excellent devs",
    },
    {
      link: "https://books.zuri.team/design-rules",
      text: "Design Books",
      id: "book__design",
      subtext: "Kickstart your design career with this Free Ebook from Zuri"
    },
  ];

  export {info, profile};