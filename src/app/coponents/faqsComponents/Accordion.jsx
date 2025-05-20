/* eslint-disable @next/next/no-img-element */
"use client";

import { ITEMS_LIST } from "./mocs";
import s from "./AccordionList.module.scss";
import TitleH2 from "@/app/ui/TitleH2/TitleH2";
import Container from "../base/Container/Container";
import { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";
import Image from "next/image";

const AccordionList = () => {
  const [openId, setId] = useState(null);

  useEffect(() => {
    setId(0);
  }, []);

  return (
    <section className={s.faqs}>
      <div className={s.positionBox}>
        <Container>
          <TitleH2 title="Frequently Asked Questions (FAQ)" margin="55" />
          <ul className={s.accordion}>
            {ITEMS_LIST.map(({ header, content }, i) => {
              return (
                <AccordionItem
                  onClick={() => (i === openId ? setId(null) : setId(i))}
                  header={header}
                  content={content}
                  isOpen={i === openId}
                  key={i}
                />
              );
            })}
          </ul>
        </Container>
      </div>
      <img className={s.img} src="./images/bg-img-4.png" alt="" />
    </section>
  );
};

export default AccordionList;
