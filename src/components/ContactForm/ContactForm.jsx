import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = { name: "", number: "" };

const ContactForm = ({ onSubmit }) => {
  const nameId = useId();
  const numberId = useId();
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.name, values.number);

    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameId}>
          Name
        </label>
        <Field className={css.field} type="text" name="name" id={nameId} />
        <ErrorMessage className={css.error} name="name" component="p" />
        <label className={css.label} htmlFor={numberId}>
          Number
        </label>
        <Field className={css.field} type="text" name="number" id={numberId} />
        <ErrorMessage className={css.error} name="number" component="p" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;