import s from "./TitleH1.module.scss";

const TitleH1 = ({ title, span, margin }) => {
  const marginBottom = {
    marginBottom: `${margin}px`,
  };
  return (
    <h1 className={s.title} style={marginBottom}>
      {title} <span className={s.title__span}>{span}</span>
    </h1>
  );
};

export default TitleH1;
