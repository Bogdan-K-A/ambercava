const Section = ({ children, top = 0, bottom = 0 }) => {
  const sectionStyle = {
    position: "relative",
    padding: `${top}px 0 ${bottom}px 0`,
  };

  return <section style={sectionStyle}>{children}</section>;
};

export default Section;
