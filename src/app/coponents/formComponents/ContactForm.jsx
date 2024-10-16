"use client";

import { Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <section className={s.contactForm}>
      <Formik
        initialValues={{ name: "", email: "", phone: "", message: "" }}
        onSubmit={(values) => {
          console.log("values", values);

          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Обязательное поле"),
          email: Yup.string().email().required("Обязательное поле"),
          phone: Yup.string().required("Обязательное поле"),
          message: Yup.string().required("Обязательное поле"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;

          return (
            <div className={s.contactForm}>
              <div className={s.formWrapper}>
                <div className={s.textWrapper}>
                  <h3 className={s.formTitle}>Contact us</h3>
                  <p>
                    <span>Send us an a mail</span> or start a conversation by
                    filling out the form left. Let’s talk!
                  </p>
                </div>

                <form className={s.form} onSubmit={handleSubmit}>
                  <label className={s.formLabel}>
                    <p>Name*</p>
                    <input
                      className={s.formInput}
                      id="name"
                      placeholder="Name"
                      type="text"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.name && touched.name ? (
                      <div style={{ color: "red" }}>{errors.name}</div>
                    ) : (
                      <div style={{ height: "19px" }}></div>
                    )}
                  </label>

                  <label className={s.formLabel}>
                    <p>E-mail*</p>
                    <input
                      className={s.formInput}
                      id="email"
                      placeholder=" E-mail"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <div style={{ color: "red" }}>{errors.email}</div>
                    ) : (
                      <div style={{ height: "19px" }}></div>
                    )}
                  </label>

                  <label className={s.formLabel}>
                    <p>Phone*</p>
                    <input
                      className={s.formInput}
                      id="phone"
                      placeholder=" Phone"
                      type="tel"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phone && touched.phone ? (
                      <div style={{ color: "red" }}>{errors.phone}</div>
                    ) : (
                      <div style={{ height: "19px" }}></div>
                    )}
                  </label>

                  <label className={s.formLabel}>
                    <p>Message*</p>
                    <textarea
                      className={s.formTextarea}
                      id="message"
                      placeholder=" Message"
                      type="text"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.message && touched.message ? (
                      <div style={{ color: "red" }}>{errors.message}</div>
                    ) : (
                      <div style={{ height: "19px" }}></div>
                    )}
                  </label>

                  <button className={s.btn} type="submit">
                    <span>Send</span>
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Formik>
      <img className={s.img} src="./images/bg-img-4.png" alt="" />
    </section>
  );
};

export default ContactForm;
