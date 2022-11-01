function Links({ link, text, id, subtext }) {
  return (
    <a href={link} className={"links"} id={id}>
      {text}
      <p style={subtext ? {} : { display: "none" }}>{subtext}</p>
    </a>
  );
}

export default Links;