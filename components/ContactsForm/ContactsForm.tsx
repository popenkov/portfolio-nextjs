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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <label htmlFor="firstName">First name</label>
                <input
                  type="firstName"
                  name="firstName"
                  id="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p>
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>
              </div>
              <label htmlFor="lastName">Last name</label>
              <input
                type="lastName"
                name="lastName"
                id="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <textarea
              name="comment"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.comment}
            />
            {errors.comment && touched.comment && errors.comment}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ContactsForm;
