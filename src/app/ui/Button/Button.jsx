import Link from "next/link";
import s from "./button.module.scss";

const Button = ({ text, href }) => {
  return (
    <Link className={s.btn} href={href}>
      {text}
    </Link>
  );
};

export default Button;
