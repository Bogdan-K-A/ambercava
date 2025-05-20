"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import s from "./NavBar.module.scss";
import cn from "clsx";

const NavBar = ({ toggle }) => {
  const pathname = usePathname();

  const navList = [
    { name: "home", path: "/" },
    { name: "services", path: "/service-page" },
    { name: "why cyprus?", path: "/why-cyprus" },
    { name: "faq", path: "/faqs" },
    { name: "contacts", path: "/contacts" },
  ];

  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        {navList.map(({ name, path }) => {
          return (
            <li
              key={name}
              className={
                pathname === `${path}`
                  ? cn("active", s.nav__listItem)
                  : s.nav__listItem
              }
            >
              <Link
                className={s.nav__listItemLink}
                href={path}
                onClick={toggle}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
