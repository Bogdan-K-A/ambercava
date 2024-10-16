import Image from "next/image";
import Section from "../../base/Section/Section";
import Container from "../../base/Container/Container";
import agreement from "../../../../../public/images/home/agreement.svg";
import briefcase from "../../../../../public/images/home/briefcase.svg";
import talk from "../../../../../public/images/home/talk-talk.svg";
import TitleH2 from "@/app/ui/TitleH2/TitleH2";
import s from "./KeyServices.module.scss";
import Button from "@/app/ui/Button/Button";

const KeyServices = () => {
  return (
    <Section top="139" bottom="139">
      <Container>
        <TitleH2 title="Key Services" margin="78" />

        <ul className={s.list}>
          <li className={s.list__item}>
            <Image
              className={s.list__item_img}
              src={agreement}
              alt="agreement"
            />
            <h3 className={s.list__item_title}>Company Incorporation</h3>
            <p className={s.list__item_text}>
              Explore our comprehensive services covering various company types
              in Cyprus, ensuring a smooth and efficient incorporation process.
            </p>
          </li>

          <li className={s.list__item}>
            <Image
              className={s.list__item_img}
              src={briefcase}
              alt="briefcase"
            />
            <h3 className={s.list__item_title}>Corporate Services</h3>
            <p className={s.list__item_text}>
              From bank account setup to tax planning and compliance, we provide
              comprehensive corporate solutions in Cyprus.
            </p>
          </li>

          <li className={s.list__item}>
            <Image className={s.list__item_img} src={talk} alt="talk-talk" />
            <h3 className={s.list__item_title}>Legal and Advisory</h3>
            <p className={s.list__item_text}>
              Access expert legal counsel and advisory services tailored to your
              business needs.
            </p>
          </li>
        </ul>
        <div className={s.btnPosition}>
          <Button className={s.btnPosition} text="Contact us today!" href="#" />
        </div>
      </Container>
    </Section>
  );
};

export default KeyServices;
