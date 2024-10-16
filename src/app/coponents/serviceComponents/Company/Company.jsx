import Section from "../../base/Section/Section";
import TitleH2 from "@/app/ui/TitleH2/TitleH2";
import Button from "@/app/ui/Button/Button";
import Container from "../../base/Container/Container";
import s from "./Company.module.scss";

const Company = () => {
  return (
    <div className={s.bgImg}>
      <Section top={105} bottom={76}>
        <div className={s.titlePosition}>
          <TitleH2
            title="Company Incorporation Process in Cyprus"
            margin="70"
          />
        </div>
        <Container>
          <ul className={s.list}>
            <li className={s.list__item}>
              <div className={s.titleBox}>
                <p className={s.list__itemNum}>01</p>
                <h3 className={s.list__itemTitle}>Pre-Incorporation Phase:</h3>
              </div>

              <div className={s.row}>
                <div className={s.col}>
                  <p className={s.accentText}>Consultation</p>
                  <p className={s.text}>
                    You discuss your business objectives, structure, and
                    preferences with Amberkava's experts to determine the most
                    suitable company type and requirements.
                  </p>
                </div>

                <div className={s.col}>
                  <p className={s.accentText}>Name Reservation</p>
                  <p className={s.text}>
                    The first step involves checking and reserving a unique name
                    for your company, ensuring it complies with Cyprus
                    regulations.
                  </p>
                </div>
              </div>
            </li>

            <li className={s.list__item}>
              <div className={s.titleBox}>
                <p className={s.list__itemNum}>02</p>
                <h3 className={s.list__itemTitle}>Document Preparation:</h3>
              </div>

              <div className={s.row}>
                <div className={s.col}>
                  <p className={s.accentText}>Gathering Documentation</p>
                  <p className={s.text}>
                    You provide necessary documentation, including
                    identification details, proof of address, articles of
                    association, and details of business activities.
                  </p>
                </div>

                <div className={s.col}>
                  <p className={s.accentText}>Drafting Documents</p>
                  <p className={s.text}>
                    Preparation of necessary registration documents, ensuring
                    accuracy and compliance with Cyprus laws and regulations.
                  </p>
                </div>
              </div>
            </li>

            <li className={s.list__item}>
              <div className={s.titleBox}>
                <p className={s.list__itemNum}>03</p>
                <h3 className={s.list__itemTitle}>Incorporation Procedure:</h3>
              </div>

              <div className={s.row}>
                <div className={s.col}>
                  <p className={s.accentText}>Company Registration</p>
                  <p className={s.text}>
                    Upon completion of document preparation, the incorporation
                    process begins. Amberkava submits the required documents to
                    the Cyprus Registrar of Companies for company registration.
                  </p>
                </div>

                <div className={s.col}>
                  <p className={s.accentText}>Obtaining Certificates</p>
                  <p className={s.text}>
                    Once approved, the company receives its Certificate of
                    Incorporation, Tax Identification Number (TIN), and other
                    essential corporate documents duly certified and apostilled.
                  </p>
                </div>
              </div>
            </li>

            <li className={s.list__item}>
              <div className={s.titleBox}>
                <p className={s.list__itemNum}>04</p>
                <h3 className={s.list__itemTitle}>
                  Post-Incorporation Compliance:
                </h3>
              </div>

              <div className={s.row}>
                <div className={s.col}>
                  <p className={s.accentText}>
                    Registered Office and Secretary
                  </p>
                  <p className={s.text}>
                    A registered office address and secretary must be appointed,
                    which Amberkava assists with to ensure full compliance.
                    Leverage the services of our professional local directors to
                    fulfill the legal requirements for tax residency criteria
                    and ensure legal compliance.
                  </p>
                </div>

                <div className={s.col}>
                  <p className={s.accentText}>Bank Account Setup</p>
                  <p className={s.text}>
                    Assistance in setting up a bank account for the company,
                    including guidance on required documentation and procedures.
                  </p>
                </div>
              </div>
            </li>

            <li className={s.list__item}>
              <div className={s.titleBox}>
                <p className={s.list__itemNum}>05</p>
                <h3 className={s.list__itemTitle}>
                  Ongoing Compliance Support:
                </h3>
              </div>

              <div className={s.row}>
                <div className={s.col}>
                  <p className={s.accentText}>Annual Obligations</p>
                  <p className={s.text}>
                    Amberkava guides clients in fulfilling annual obligations
                    such as filing annual returns, maintaining accounting
                    records, and meeting regulatory requirements. We take all
                    the hassle out of the preparation and submission of reports,
                    accounting, and audit procedures. We keep a close eye on
                    deadlines for the relevant tax payments to let you
                    concentrate on business.
                  </p>
                </div>

                <div className={s.col}>
                  <p className={s.accentText}>Additional Services:</p>
                  <p className={s.text}>
                    Apart from incorporation, Amberkava offers
                    post-incorporation services like legal counsel, tax
                    planning, and advisory support tailored to clients' evolving
                    business needs. Trust us to handle the meticulous
                    preparation and submission of VAT, OSS, and VIES
                    declarations, ensuring compliance with tax regulations.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div className={s.btnPosition}>
            <Button text="Get a quote" href="#" />
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Company;
