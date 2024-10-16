import Image from "next/image";
import s from "./AccordionList.module.scss";
import { useRef } from "react";
import clsx from "clsx";

const AccordionItem = ({ header, content, onClick, isOpen }) => {
  const itemRef = useRef(null);

  return (
    <li className={s.accordionItem}>
      <button className={s.accordionHeader} onClick={() => onClick()}>
        {header}
        <Image
          className={clsx(isOpen ? s.active : "")}
          src={"./images/flag.png"}
          alt="arrow"
          width={18}
          height={11}
        />
      </button>

      <div
        className={s.accordionCollaps}
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
        }
      >
        <p className={s.accordionBody} ref={itemRef}>
          {content}
        </p>
      </div>
    </li>
  );
};

export default AccordionItem;
