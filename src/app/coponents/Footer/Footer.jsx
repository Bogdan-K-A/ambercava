import Image from "next/image";
import Container from "../base/Container/Container";
import s from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerBox__content}>
        <Container>
          <div className={s.flexBox}>
            <div className={s.adress}>
              <h3 className={s.adress__title}>AMBERKAVA CYCOR LTD</h3>
              <p className={s.adress__text}>
                Griva Digeni 3, Patsalos House, 2nd Floor, Office 202, 6030
                Larnaca, Cyprus
              </p>
            </div>

            <Image
              style={{ marginTop: "18px" }}
              src={"./images/cba-test.png"}
              alt="cba"
              width={130}
              height={130}
              priority
            />

            <ul className={s.navList}>
              <li className={s.navList__item}>
                <Link className={s.navList__item_link} href="/">
                  HOME
                </Link>
              </li>
              <li className={s.navList__item}>
                <Link className={s.navList__item_link} href="/service-page">
                  SERVICES
                </Link>
              </li>
              <li className={s.navList__item}>
                <Link className={s.navList__item_link} href="#">
                  Why Cyprus?
                </Link>
              </li>
              <li className={s.navList__item}>
                <Link className={s.navList__item_link} href="#">
                  faqS
                </Link>
              </li>
            </ul>

            <div className={s.socialBox}>
              <h3 className={s.socialBox__title}>Follow us</h3>
              <ul className={s.socialBox__list}>
                <li className={s.socialBox__list_item}>
                  <a className={s.socialBox__list_itemLink} href="#">
                    <Image
                      src={"./images/in.svg"}
                      alt="Linkedin"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li className={s.socialBox__list_item}>
                  <a className={s.socialBox__list_itemLink} href="#">
                    <Image
                      src={"./images/fb.svg"}
                      alt="Ficebook"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
                <li className={s.socialBox__list_item}>
                  <a className={s.socialBox__list_itemLink} href="#">
                    <Image
                      src={"./images/mail.svg"}
                      alt="mail"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className={s.secondaryFooter}>
          <p>© 2024 Amberkava. All rights reserved.</p>
          <ul className={s.privasiList}>
            <li className={s.privasiList__item}>
              <a href="#">Terms of Use</a>
            </li>
            <li className={s.privasiList__item}>
              <a href="#">Privacy Policy</a>
            </li>
            <li className={s.privasiList__item}>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
