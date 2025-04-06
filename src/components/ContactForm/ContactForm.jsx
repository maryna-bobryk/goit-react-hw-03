import s from './ContactForm.module.css';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useId } from 'react';

const ContactForm = ({ handleSubmit }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const onSubmit = (values, options) => {
    handleSubmit({
      ...values,
      id: nanoid(),
    });
    options.resetForm();
  };

  const initialValues = {
    name: '',
    number: '',
  };

  const applySchema = () =>
    Yup.object().shape({
      name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      number: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    });

  return (
    <div className={s.contactFormWrapper}>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={applySchema}
      >
        <Form className={s.contactForm}>
          <div className={s.contactFormInput}>
            <label htmlFor={nameFieldId} className={s.contactFormLabel}>
              <span>Name</span>
              <Field type="text" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className={s.errorMessage}
              />
            </label>
          </div>
          <div className={s.contactFormInput}>
            <label htmlFor={numberFieldId}className={s.contactFormLabel}>
              <span>Number</span>
              <Field type="number" name="number" />
              <ErrorMessage
                name="number"
                component="div"
                className={s.errorMessage}
              />
            </label>
          </div>
          <button type="submit" className={s.contactFormBtn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
