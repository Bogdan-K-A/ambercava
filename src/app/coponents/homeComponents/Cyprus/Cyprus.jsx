import React from "react";
import Image from "next/image";
import cn from "clsx";
import Section from "../../base/Section/Section";
import Container from "../../base/Container/Container";
import map from "../../../../../public/images/home/map.png";
import TitleH2 from "@/app/ui/TitleH2/TitleH2";
import Button from "@/app/ui/Button/Button";
import s from "./Cyprus.module.scss";

const Cyprus = () => {
  return (
    <Section top={95} bottom={365}>
      <div className={s.bgGradient}></div>
      <Container>
        <div className={s.titlePosition}>
          <TitleH2
            title="Why Opt for Cyprus Company Incorporation"
            margin="79"
          />
        </div>

        <div className={s.felxBox}>
          <ul className={cn(s.list, s.margin)}>
            <li className={s.list__item}>
              <p className={s.list__item_text}>
                An ideal location for both a holding company and an
                <br /> operating company
              </p>
            </li>
            <li className={s.list__item}>
              <p className={s.list__item_text}>
                Easy and fully remote company set up procedure
              </p>
            </li>
            <li className={s.list__item}>
              <p className={s.list__item_text}>
                Low corporate tax rate of just 12.5%
              </p>
            </li>
            <li className={s.list__item}>
              <p className={s.list__item_text}>
                No taxation on dividends and capital gains
              </p>
            </li>
            <li className={s.list__item}>
              <p className={s.list__item_text}>
                Over 65 double taxation treaties
              </p>
            </li>
          </ul>
          <ul className={s.list}>
            <li className={s.list__item}>
              <p className={s.list__item_text}>
                Highly skilled and multilingual workforce
              </p>
            </li>
            <li className={s.list__item}>
              <p className={s.list__item_text}>
                Cyprus is a member of the EU and SEPA zone
              </p>
            </li>
            <li className={s.list__item}>
              <p className={s.list__item_text}>
                Strategically located at the crossroads of Europe,
                <br /> Asia, and Africa.
              </p>
            </li>
            <li className={s.list__item}>
              <p className={s.list__item_text}>
                Intellectual Property (IP) Box regime, with a low tax <br />
                rate of 2.5% on IP income
              </p>
            </li>
          </ul>
        </div>
        <div className={s.positionBox}>
          <div className={s.imgBox}>
            <div className={s.imgBox__btn}>
              <Button text="Learn more" href="#" />
            </div>
            <Image src={map} alt="map" priority width={865} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Cyprus;
