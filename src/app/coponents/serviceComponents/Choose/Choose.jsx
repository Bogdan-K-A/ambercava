import Container from "../../base/Container/Container";
import Section from "../../base/Section/Section";
import TitleH2 from "@/app/ui/TitleH2/TitleH2";
import s from "./Choose.module.scss";
import Image from "next/image";
import Button from "@/app/ui/Button/Button";

const Choose = () => {
  return (
    <Section bottom={130}>
      {/* BOX 1 */}
      <div className={s.box1}>
        <Container>
          <div className={s.titleBox}>
            <TitleH2 title="Why Choose Amberkava" />
          </div>
          <div className={s.content}>
            <h3 className={s.content__title}>
              Company Incorporation Services in Cyprus
            </h3>
            <p className={s.content__secondari_text}>
              Amberkava specializes in guiding businesses through the intricate
              process of company incorporation in Cyprus.{" "}
            </p>
            <p className={s.content__text}>
              Our team assists in determining the most suitable corporate
              structure, whether it's establishing Limited Liability Companies
              (LLCs), licensed companies, foundations, or other specialized
              business forms.
            </p>
            <p className={s.content__text}>
              We meticulously navigate legal formalities, draft necessary
              documentation, and ensure compliance with Cyprus laws, providing a
              strong and legally sound foundation for your business operations.
            </p>

            <Button text="Contact for more" href="#" />
          </div>

          <div className={s.imgPosition}>
            <div className={s.img}>
              <Image
                src="images/photo-1.jpg"
                alt="cba-test"
                width={100}
                height={100}
                priority
              />
            </div>
          </div>
        </Container>
        <div className={s.section_line}></div>
      </div>

      {/* BOX 2 */}
      <div className={s.box2}>
        <Container>
          <div className={s.content}>
            <h3 className={s.content__title}>Corporate Services</h3>
            <p className={s.content__secondari_text}>
              Explore our comprehensive suite of corporate services designed to
              optimize your business's financial and operational landscape in
              Cyprus
            </p>
            <p className={s.content__text}>
              Our experts assist in setting up bank accounts, devising
              tax-efficient strategies, managing accounting and bookkeeping, and
              ensuring adherence to regulatory frameworks.
            </p>
            <p className={s.content__text}>
              By partnering with Amberkava, businesses gain access to strategic
              solutions that enhance operational efficiency and financial
              stability while complying with Cyprus's regulatory landscape.
            </p>

            <Button text="Contact for more" href="#" />
          </div>

          <div className={s.imgPosition}>
            <div className={s.img}>
              <Image
                src="images/photo-3.jpg"
                alt="cba-test"
                width={100}
                height={100}
                priority
              />
            </div>
          </div>
        </Container>
        <div className={s.section_line2}></div>
      </div>

      {/* BOX 3 */}
      <div className={s.box3}>
        <Container>
          <div className={s.content}>
            <h3 className={s.content__title}>Legal and Advisory Services</h3>
            <p className={s.content__secondari_text}>
              Amberkava's legal and advisory services are tailored to address
              the diverse needs of businesses setting up in Cyprus
            </p>
            <p className={s.content__text}>
              Our experienced legal team provides invaluable guidance on
              compliance matters, drafts and reviews contracts, handles
              corporate governance issues, and offers strategic advice on
              navigating the Cyprus's legal and regulatory environment.
            </p>
            <p className={s.content__text}>
              We prioritize safeguarding your business's interests, ensuring a
              smooth and legally compliant operational journey in Cyprus.
            </p>

            <Button text="Contact for more" href="#" />
          </div>

          <div className={s.imgPosition}>
            <div className={s.img}>
              <Image
                src="images/photo-2.jpg"
                alt="cba-test"
                width={100}
                height={100}
                priority
              />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Choose;
