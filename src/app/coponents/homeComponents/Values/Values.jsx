import Section from "../../base/Section/Section";
import Container from "../../base/Container/Container";

import s from "./Values.module.scss";
import { CARD_LIST, WHY_LIST } from "./mocs";
import TitleH2 from "@/app/ui/TitleH2/TitleH2";

const Values = () => {
  return (
    <Section top={26} bottom={170} style={{ position: "relative" }}>
      <Container>
        <TitleH2 title="our values" margin={55} />
        <ul className={s.cardList}>
          {CARD_LIST.map(({ title, text }) => {
            return (
              <li className={s.cardList__item} key={title}>
                <h3 className={s.cardList__title}>{title}</h3>
                <p className={s.cardList__text}>{text}</p>
              </li>
            );
          })}
        </ul>

        <TitleH2 title="Why Choose Amberkava" margin="100" />
        <ul className={s.whyList}>
          {WHY_LIST.map(({ title, text }) => {
            return (
              <li className={s.whyList__item} key={title}>
                <h3 className={s.whyList__item_title}>{title}</h3>
                <p className={s.whyList__item_text}>{text}</p>
              </li>
            );
          })}
        </ul>
      </Container>

      <div className={s.imgContainer}>
        <div className={s.bgImage}>
          <div className={s.leftShadow}></div>
          <div className={s.rightShadow}></div>
        </div>
      </div>
    </Section>
  );
};

export default Values;
