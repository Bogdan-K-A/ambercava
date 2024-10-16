import TitleH1 from "@/app/ui/TitleH1/TitleH1";
import Container from "../../base/Container/Container";
import Button from "@/app/ui/Button/Button";
import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={s.hero}>
      <Container>
        <div className={s.contentBox}>
          <TitleH1
            title="Register your company in Cyprus"
            span="in just a few simple steps!"
            margin="23"
          />
          <p className={s.text}>
            Amberkava is your dedicated partner in streamlining the company
            incorporation in Cyprus. Our services are tailored to ensure a
            seamless and legally compliant setup, fostering a secure and
            prosperous business future.
          </p>
          <Button text="Get consultation " href="#" />
        </div>
      </Container>
      <div className={s.shadowBox}></div>
    </section>
  );
};

export default Hero;
