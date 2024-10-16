import Hero from "../coponents/cyprusComponents/Hero/Hero";
import s from "../../app/coponents/cyprusComponents/Hero/Hero.module.scss";
import Advantages from "../coponents/cyprusComponents/Advantages/Advantages";

const WhyCyprus = () => {
  return (
    <>
      <Hero />
      <div className={s.blackBox}>
        <div className={s.section_line}></div>
      </div>
      <Advantages />
    </>
  );
};

export default WhyCyprus;
