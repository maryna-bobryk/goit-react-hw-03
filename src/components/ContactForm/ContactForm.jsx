import s from './ContactForm.module.css';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
// import { useId } from 'react';

const ContactForm = ({ onAddContact }) => {
  // const nameId = useId();
  // const numberId = useId();

  const nameId = nanoid();
  const numberId = nanoid();

  const onSubmit = (values, options) => {
    onAddContact({
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
            <label htmlFor={nameId} className={s.contactFormLabel}>
              <span>Name</span>
              <Field id={nameId} type="text" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className={s.errorMessage}
              />
            </label>
          </div>
          <div className={s.contactFormInput}>
            <label htmlFor={numberId}className={s.contactFormLabel}>
              <span>Number</span>
              <Field id={numberId} type="number" name="number" />
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
