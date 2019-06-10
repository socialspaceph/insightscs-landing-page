import React from 'react'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { TextInputGroup } from '../../elements'

const testSchema = Yup.object().shape({
  name: Yup.string().required(),
})

export default function HeroForm({ theme }) {
  const handleSubmit = e => {
    e.preventDefault()
    console.log('HELLO')
  }

  return (
    <div className="form__wrapper">
      <Formik
        validationSchema={testSchema}
        initialValues={{
          name: '',
          email: '',
          contact: '',
        }}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {() => (
          <Form>
            <Field
              name="name"
              id="name"
              label="Name"
              required
              component={TextInputGroup}
            />
            <ErrorMessage name="name" component="div" />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="number" name="contact" />
            <ErrorMessage name="number" component="div" />
            <button>Submit</button>
          </Form>
        )}
      </Formik>
      <style jsx>
        {`
          .form__wrapper {
            width: 100%;
            box-shadow: 0 30px 60px 1px rgba(0, 0, 0, 0.15);
            border-radius: 15px;
            padding: 1rem;
          }

          @media (min-width: ${theme.breakpoints.md}) {
            .form__wrapper {
              padding: 3rem 2rem;
            }
          }
        `}
      </style>
    </div>
  )
}

HeroForm.propTypes = {
  theme: PropTypes.object.isRequired,
}
