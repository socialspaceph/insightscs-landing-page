import React from 'react'
import PropTypes from 'prop-types'
import { heroValidationSchema } from '../../lib/validationSchemas'
import { Formik, Form, Field } from 'formik'

import { TextInputGroup } from '../../elements'

export default function HeroForm({ theme }) {
  return (
    <div className="form__wrapper">
      <Formik
        validationSchema={heroValidationSchema}
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
            <Field
              name="email"
              id="email"
              label="Email"
              type="email"
              required
              component={TextInputGroup}
            />
            <Field
              name="contact"
              id="contact"
              label="Contact Number"
              type="number"
              required
              component={TextInputGroup}
            />
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
