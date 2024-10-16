import s from "./TitleH2.module.scss";

const TitleH2 = ({ title = "", margin = 0 }) => {
  const marginBottom = {
    marginBottom: `${margin}px`,
  };
  return (
    <div className={s.flexBox} style={marginBottom}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.ellowLine}></div>
    </div>
  );
};

export default TitleH2;
