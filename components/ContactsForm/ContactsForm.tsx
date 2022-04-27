import styles from "./ContactsForm.module.scss";
import { Formik, FormikErrors } from "formik";
import { FC } from "react";

type contactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
};

function ContactsForm(): JSX.Element {
  const initialValues: contactFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: FormikErrors<contactFormValues> = {};
          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.firstName) {
            errors.firstName = "Name is required";
          } else if (values.firstName.length === 3) {
            errors.firstName = "Min length is 3";
          } else if (!/\D+/i.test(values.firstName)) {
            errors.firstName = "Only letters";
          }
          if (!values.lastName) {
            errors.lastName = "Name is required";
          } else if (values.lastName.length === 3) {
            errors.lastName = "Min length is 3";
          } else if (!/\D+/i.test(values.lastName)) {
            errors.lastName = "Only letters";
          }

          if (!values.comment) {
            errors.comment = "Comment is required";
          } else if (values.comment.length === 50) {
            errors.comment = "Min length is 50";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className={styles.contactsForm}>
            <div className={styles.formContainer}>
              <div className={styles.inputContainer}>
                <label htmlFor="firstName" className={styles.inputLabel}>
                  First name
                </label>
                <input
                  type="firstName"
                  name="firstName"
                  id="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  className={styles.input}
                />
                <p className={styles.errorMessage}>
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="lastName" className={styles.inputLabel}>
                  Last name
                </label>
                <input
                  type="lastName"
                  name="lastName"
                  id="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  className={styles.input}
                />
                <p className={styles.errorMessage}>
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>
              </div>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="email" className={styles.inputLabel}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={styles.input}
              />

              <p className={styles.errorMessage}>
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="comment" className={styles.inputLabel}>
                Comment
              </label>
              <textarea
                name="comment"
                id="comment"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.comment}
                className={styles.textarea}
              />

              <p className={styles.errorMessage}>
                {errors.comment && touched.comment && errors.comment}
              </p>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submitBtn}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ContactsForm;
