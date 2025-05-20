"use client";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../base/Container/Container";
import s from "./hero.module.scss";
import SlideButtons from "./SlideButtons";

import "swiper/css";
import "swiper/css/navigation";
import Button from "@/app/ui/Button/Button";
import TitleH1 from "@/app/ui/TitleH1/TitleH1";

const Hero = () => {
  return (
    <section className={s.hero}>
      <Container>
        {/* title */}
        <div className={s.titleBox}>
          <p className={s.titleBox__text}>Welcome to Amberkava!</p>
          <TitleH1
            title="Your Gateway to Secure Company"
            span="Incorporation in Cyprus"
            margin="80"
          />
        </div>

        {/* button */}
        <div className={s.flexBox}>
          <div className={s.buttonBox}>
            <div className={s.buttonBox__margin}>
              <Button href="#" text="Let’s get in touch!" />
            </div>
            <p className={s.buttonBox__text}>
              By clicking the button, you agree to our
              <a href="#"> Terms of Use </a> and <a href="#"> Privacy Policy</a>
            </p>
          </div>
          <div className={s.imgBox}>
            <Image
              className={s.buttonBox__img}
              src="images/cba-test.png"
              alt="cba-test"
              width={100}
              height={100}
              priority
            />
          </div>
        </div>

        {/* слайдер */}
        <div className={s.sliderBox}>
          <div className={s.sliderBox__slider}>
            <Swiper modules={[Navigation]} loop={true} slidesPerView={1}>
              <SwiperSlide>
                <div className={s.sliderBox__flexBox}>
                  <p className={s.sliderBox__slideContent}>
                    1 Building Strong Foundations, Ensuring Secure Futures.
                  </p>
                  <div className={s.sliderBox__elowLine}></div>
                  <p className={s.sliderBox__accentText}>Amberkava motto</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={s.sliderBox__flexBox}>
                  <p className={s.sliderBox__slideContent}>
                    2 Building Strong Foundations, Ensuring Secure Futures.
                  </p>
                  <div className={s.sliderBox__elowLine}></div>
                  <p className={s.sliderBox__accentText}>Amberkava motto</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={s.sliderBox__flexBox}>
                  <p className={s.sliderBox__slideContent}>
                    3 Building Strong Foundations, Ensuring Secure Futures.
                  </p>
                  <div className={s.sliderBox__elowLine}></div>
                  <p className={s.sliderBox__accentText}>Amberkava motto</p>
                </div>
              </SwiperSlide>
              <SlideButtons />
            </Swiper>
          </div>

          <div className={s.sliderBox__content}>
            <p className={s.sliderBox__contentText}>
              At Amberkava, we pride ourselves on providing comprehensive
              solutions for company incorporation in Cyprus. Our commitment to
              your success is unwavering, ensuring a strong and secure
              foundation for your business endeavors.
            </p>
            <p className={s.sliderBox__contentText}>
              What’s more, we guarantee a comfortable and non-stressful working
              atmosphere for you throughout the entire process, as all the
              necessary work will be done by our team.
            </p>
          </div>
        </div>
      </Container>
      <div className={s.shadowBox}></div>
    </section>
  );
};

export default Hero;
