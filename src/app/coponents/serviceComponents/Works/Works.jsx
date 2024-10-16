import TitleH2 from "@/app/ui/TitleH2/TitleH2";
import Section from "../../base/Section/Section";
import s from "./Works.module.scss";
import Container from "../../base/Container/Container";
import Image from "next/image";
import { WORCS_LIST } from "./mocs";
import Button from "@/app/ui/Button/Button";

const Works = () => {
  return (
    <div className={s.bgImg}>
      <Section top={90} bottom={160}>
        <Container>
          <TitleH2 title="How Amberkava Works" margin="75" />
          <ul className={s.grid}>
            {WORCS_LIST.map(({ title, img, text }) => {
              return (
                <li className={s.item} key={title}>
                  <Image className={s.img} src={img} alt="title" />
                  <h3
                    className={s.title}
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <p className={s.text}>{text}</p>
                </li>
              );
            })}
          </ul>
          <div className={s.btnPosition}>
            <Button text="Get in touch" href="#" />
          </div>
        </Container>
      </Section>
      <div className={s.yellowBox}>
        <Container>
          <div className={s.wrapper}>
            <div className={s.contetnBox}>
              <h3 className={s.yellowBoxTitle}>
                Ready to embark on your Cyprus incorporation journey?
              </h3>
              <p className={s.yellowBoxText}>
                Contact us today for a consultation or to delve deeper into how
                we can assist in establishing and growing your business in
                Cyprus
              </p>
            </div>
            <div className={s.btnColor}>
              <Button text="Get in touch" href="#" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Works;
