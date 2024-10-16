import TitleH1 from "@/app/ui/TitleH1/TitleH1";
import Container from "../../base/Container/Container";
import s from "./Hero.module.scss";
import Button from "@/app/ui/Button/Button";
import TitleH2 from "@/app/ui/TitleH2/TitleH2";

const Hero = () => {
  return (
    <section className={s.hero}>
      <Container>
        <div className={s.contentBox}>
          <TitleH1
            title="Set up your "
            span="business in Cyprus today"
            margin="23"
          />
          <p className={s.text}>
            Cyprus is an attractive destination for a business looking to
            establish a company in the EU. Being a digital oasis for IT
            business, Cyprus offers a pro-business environment, competitive tax
            rates, and access to a skilled workforce.
          </p>
          <p className={s.text}>
            Every year, the jurisdiction is increasingly striving to become one
            of the main European business centers and does everything possible
            to obtain this status.
          </p>
          <Button text="Get consultation " href="#" />
        </div>
      </Container>

      <div className={s.shadowBox}></div>

      <div className={s.positionBox}>
        <Container>
          <TitleH2 title="Is Cyprus good for your business?" margin="15" />
          <p className={s.text}>
            Cyprus as a jurisdiction can be suitable for various types of
            business and company’s operations
          </p>

          <div className={s.listsBox}>
            <ul className={s.list}>
              <li className={s.list__item}>
                <div className={s.list__itemPoint}></div>
                <p className={s.list__itemText}>
                  Software development companies
                </p>
              </li>
              <li className={s.list__item}>
                <div className={s.list__itemPoint}></div>
                <p className={s.list__itemText}>Merchants</p>
              </li>
              <li className={s.list__item}>
                <div className={s.list__itemPoint}></div>
                <p className={s.list__itemText}>Holding companies</p>
              </li>
              <li className={s.list__item}>
                <div className={s.list__itemPoint}></div>
                <p className={s.list__itemText}>
                  Intellectual Property Holding
                </p>
              </li>
              <li className={s.list__item}>
                <div className={s.list__itemPoint}></div>
                <p className={s.list__itemText}>Tech Start-Ups</p>
              </li>
            </ul>

            <ul className={s.list}>
              <li className={s.list__item}>
                <div className={s.list__itemPoint}></div>
                <p className={s.list__itemText}>E-Commerce</p>
              </li>
              <li className={s.list__item}>
                <div className={s.list__itemPoint}></div>
                <p className={s.list__itemText}>Payment agents</p>
              </li>
              <li className={s.list__item}>
                <div className={s.list__itemPoint}></div>
                <p className={s.list__itemText}>Forex companies</p>
              </li>
              <li className={s.list__item}>
                <div className={s.list__itemPoint}></div>
                <p className={s.list__itemText}>FinTech companies</p>
              </li>
              <li className={s.list__item}>
                <div className={s.list__itemPoint}></div>
                <p className={s.list__itemText}>Investment Companies</p>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
