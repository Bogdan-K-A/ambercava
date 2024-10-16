import { useSwiper } from "swiper/react";
import s from "./hero.module.scss";

export default function SlideButtons() {
  const swiper = useSwiper();

  return (
    <div className={s.sliderBox__buttonBox}>
      <div className={s.customPrev} onClick={() => swiper.slidePrev()}></div>
      <div className={s.customNext} onClick={() => swiper.slideNext()}></div>
    </div>
  );
}
