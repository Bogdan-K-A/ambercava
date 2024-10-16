import Section from "../../base/Section/Section";
import TitleH2 from "@/app/ui/TitleH2/TitleH2";
import Button from "@/app/ui/Button/Button";
import Container from "../../base/Container/Container";
import s from "./Advantages.module.scss";

const Advantages = () => {
  return (
    <div className={s.bgImg}>
      <Section top={105} bottom={76}>
        <div className={s.titlePosition}>
          <TitleH2
            title="Advantages of 
            Cyprus Business Setup"
            margin="100"
          />
        </div>
        <Container>
          <ul className={s.list}>
            <li className={s.list__item}>
              <div className={s.titleBox}>
                <p className={s.list__itemNum}>01</p>
                <h3 className={s.list__itemTitle}>
                  Strategic Geographical <br /> Location
                </h3>
              </div>

              <div className={s.row}>
                <p className={s.text}>
                  Cyprus serves as a bridge between three continents, making it
                  an ideal strategic location for businesses looking to access
                  and expand into European, Middle Eastern, and African markets.
                  Its proximity to key global markets provides unparalleled
                  opportunities for international trade and business expansion.
                </p>
              </div>
            </li>

            <li className={s.list__item}>
              <div className={s.titleBox}>
                <p className={s.list__itemNum}>02</p>
                <h3 className={s.list__itemTitle}>
                  EU Membership <br /> Benefits
                </h3>
              </div>

              <div className={s.row}>
                <p className={s.text}>
                  As a member of the European Union (EU) and SEPA, Cyprus
                  provides businesses with access to the EU’s single market and
                  various trade agreements. This membership grants companies the
                  advantage of free movement of goods, services, capital, and
                  skilled labor within the EU, facilitating business growth and
                  market expansion. Access to international financial
                  institutions and a developed local banking sector with
                  world-class banks.
                </p>
              </div>
            </li>

            <li className={s.list__item}>
              <div className={s.titleBox}>
                <p className={s.list__itemNum}>03</p>
                <h3 className={s.list__itemTitle}>
                  Favorable Tax <br /> Regime
                </h3>
              </div>

              <div className={s.row}>
                <p className={s.text}>
                  Cyprus boasts one of the most attractive tax systems in
                  Europe, featuring a low corporate tax rate of 12.5%.
                  Additionally, it offers various tax incentives and exemptions,
                  including no taxation on dividends and interest received from
                  overseas, fostering a tax-efficient environment for
                  businesses. IT companies can benefit from exemptions on
                  profits generated from the disposal of intellectual property,
                  such as patents and copyrights.
                </p>
              </div>
            </li>

            <li className={s.list__item}>
              <div className={s.titleBox}>
                <p className={s.list__itemNum}>04</p>
                <h3 className={s.list__itemTitle}>
                  Robust Legal and <br /> Regulatory Framework
                </h3>
              </div>

              <div className={s.row}>
                <p className={s.text}>
                  Cyprus has one of the most business-friendly environments in
                  the world. Cyprus maintains a robust and transparent legal
                  system aligned with EU directives, ensuring stability and
                  predictability for businesses. The process of company
                  incorporation is relatively straightforward, with minimal
                  bureaucracy and effort involved. Moreover, you do not need to
                  be physically present on the island to incorporate a company -
                  Cyprus offers a convenient remote procedure.
                </p>
              </div>
            </li>

            <li className={s.list__item}>
              <div className={s.titleBox}>
                <p className={s.list__itemNum}>05</p>
                <h3 className={s.list__itemTitle}>
                  Skilled Workforce <br /> and Infrastructure
                </h3>
              </div>

              <div className={s.row}>
                <p className={s.text}>
                  Cyprus is home to a highly educated and multilingual
                  workforce, providing a skilled talent pool adept at meeting
                  diverse business needs. Moreover, the country offers modern
                  infrastructure, reliable telecommunications, and
                  well-established business amenities, supporting seamless
                  operations for businesses of all scales. English and Greek are
                  the official languages, so you won't have any communication
                  difficulties.
                </p>
              </div>
            </li>
          </ul>
          <div className={s.btnPosition}>
            <Button text="Get in touch" href="#" />
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Advantages;
