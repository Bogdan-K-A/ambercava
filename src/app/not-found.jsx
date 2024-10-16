import React from "react";
import s from "./style/not-found.module.scss";
import Button from "./ui/Button/Button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={s.notFoud}>
      <div className={s.contentWrapper}>
        <div className={s.content}>
          <h2>404</h2>
          <p className={s.mainText}>PAGE NOT FOUND</p>
          <p className={s.secondaryText}>
            We’re sorry, the page you requested could not be found. Please go
            back to homepage
          </p>
          <Link href="/">Go home</Link>
          {/* <Button text="Go home " href="/" /> */}
        </div>
      </div>
      <img className={s.img} src="./images/bg-img-4.png" alt="" />
    </div>
  );
};

export default NotFound;
