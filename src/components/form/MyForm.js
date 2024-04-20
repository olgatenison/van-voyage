import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  FormWrapper,
  FormikTitle,
  DescriptionForm,
  ThinInput,
  BigInput,
} from './MyFromStyled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redbutton } from 'pages/catalog/CatalogStyled';
import { theme } from 'styles/Theme';

const MyForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    toast.success('Form submitted successfully!');
    resetForm();
    setSubmitting(false);
  };

  return (
    <FormWrapper>
      <ToastContainer />
      <FormikTitle>Book your campervan now</FormikTitle>
      <DescriptionForm>
        Stay connected! We are always ready to help you.
      </DescriptionForm>
      <Formik
        initialValues={{
          name: '',
          email: '',
          bookingDate: '',
          comment: '',
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Name is required'),
          email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),
          bookingDate: Yup.date()
            .required('Booking date is required')
            .min(new Date(), 'Booking date must be in the future'),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <ThinInput>
              <label htmlFor="name"></label>
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage
                name="name"
                component={({ children }) => (
                  <div style={{ color: `${theme.colors.red}` }}>{children}</div>
                )}
              />
            </ThinInput>
            <ThinInput>
              <label htmlFor="email"></label>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage
                name="email"
                component={({ children }) => (
                  <div style={{ color: `${theme.colors.red}` }}>{children}</div>
                )}
              />
            </ThinInput>
            <ThinInput>
              <label htmlFor="bookingDate"></label>
              <Field type="date" name="bookingDate" placeholder="BookingDate" />
              <ErrorMessage
                name="bookingDate"
                component={({ children }) => (
                  <div style={{ color: `${theme.colors.red}` }}>{children}</div>
                )}
              />
            </ThinInput>
            <BigInput>
              <label htmlFor="comment"></label>
              <Field as="textarea" name="comment" placeholder="Comment" />
            </BigInput>
            <Redbutton type="submit" disabled={isSubmitting}>
              Submit
            </Redbutton>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default MyForm;
