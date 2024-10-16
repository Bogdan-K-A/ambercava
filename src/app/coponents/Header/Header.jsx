"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import s from "./header.module.scss";
import Container from "../base/Container/Container";
import NavBar from "../NavBar/NavBar";
import MobileMenu from "./MobileMenu/MobileMenu";
import menuBtn from "../../../../public/images/mobile.svg";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <header className={s.header}>
      <Container>
        <div className={s.flexBox}>
          <div>
            <Link href="/">
              <Image
                className={s.logo}
                src={logo}
                alt="ambercava"
                width={211}
                height={54}
                priority
              />
            </Link>
          </div>

          <div className={s.hidden}>
            <NavBar />
          </div>

          <MobileMenu isOpen={isOpen} toggle={toggle} />
          <Image
            className={s.imgMobileMenu}
            src={menuBtn}
            alt="close"
            onClick={toggle}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
