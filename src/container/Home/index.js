import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import CustomTextInput from '../../components/CustomTextInput';
import { Container } from '../../components/style';

const Login = () => {
  const handleClick = (value) => {};

  return (
    <Container>
      <div className='container_main'>
        <div className='container'>
          <div className='login-page'>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email('Invalid Email')
                  .required('Please Enter Your Email Address'),
                password: Yup.string()
                  .required('Please Enter Your Password')
                  .min(8, 'Seems a bit short...')
                  .max(
                    10,
                    'We prefer insecure system, try a shorter password.'
                  ),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                handleClick(values);
                resetForm();
                setSubmitting(false);
              }}
            >
              {(props) => (
                <Form className='login-form'>
                  <h3 className='title'>Log In</h3>
                  <CustomTextInput
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='example@test.com'
                    className='form-input'
                  />
                  <CustomTextInput
                    label='Password'
                    name='password'
                    type='password'
                    placeholder='********'
                    className='form-input'
                  />
                  <div className='input-options'>
                    <button type='submit' className='input-button'>
                      {props.isSubmitting ? 'loading...' : 'Log In'}
                    </button>
                  </div>

                  <div className='alternative-options'>
                    <div className='social-buttons'></div>
                  </div>
                </Form>
              )}
            </Formik>
            <div className='page-image'></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
