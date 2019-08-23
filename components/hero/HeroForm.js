import React from 'react'
import PropTypes from 'prop-types'
import { heroValidationSchema } from '../../lib/validationSchemas'
import { formSubmission } from '../../lib/formSubmission'
import { Formik, Form, Field } from 'formik'

import HeroSubmit from './HeroSubmit'

import { Button, TextInputGroup, SelectInputGroup } from '../../elements'

// import * as gtag from "../../lib/gtag";

export default function HeroForm({ theme }) {
  return (
    <div className="form__wrapper" id="section1">
      <Formik
        validationSchema={heroValidationSchema}
        initialValues={{
          name: '',
          email: '',
          contact: '',
          company_name: '',
          revenue: ''
        }}
        onSubmit={(values, { setStatus, resetForm }) => {
          // Set form to submitting
          setStatus({ submitting: true, success: false })

          const { name, email, contact, company_name, revenue } = values
          const formValues = {
            name,
            email,
            contact,
            company_name,
            revenue: revenue.value
          }

          formSubmission(formValues)
            .then(() => {
              resetForm()
              setStatus({ submitting: false, success: true })
            })
            .catch(err => {
              console.log(err)
              resetForm()
            })
          // Send gtag event
          // gtag.event({
          //   action: "submit_form",
          //   category: "Hero",
          //   label: values.email
          // });
        }}
      >
        {({
          touched,
          errors,
          values,
          isSubmitting,
          setFieldValue,
          setFieldTouched,
          status = { submitting: false, success: false }
        }) =>
          status.success ? (
            <HeroSubmit />
          ) : (
            <Form>
              <h2
                style={{
                  margin: '0 0 2rem',
                  fontWeight: 'normal',
                  fontSize: '1.1rem',
                  textAlign: 'center'
                }}
              >
                Apply for Supply Chain Financing Today
              </h2>
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
              <Field
                name="company_name"
                id="company_name"
                label="Company Name"
                type="text"
                required
                component={TextInputGroup}
              />
              <SelectInputGroup
                id="revenue"
                name="revenue"
                value={values.revenue}
                options={[
                  { label: '0 - 50,000', value: '0 - 50,000' },
                  { label: '50,001 - 100,000', value: '50,001 - 100,000' },
                  { label: '100,000 - 250,000', value: '100,000 - 250,000' },
                  { label: '250,000 - 500,000', value: '250,000 - 500,000' },
                  { label: '500k+', value: '500k+' }
                ]}
                label="How much is your average monthly revenue?"
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.revenue}
                touched={touched.revenue}
                required
              />
              {console.log(values)}
              <Button
                variant="primary"
                block
                type="submit"
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Start Application'}
              </Button>
            </Form>
          )
        }
      </Formik>
      <style jsx>
        {`
          .form__wrapper {
            width: 100%;
            box-shadow: 0 30px 60px 1px rgba(0, 0, 0, 0.15);
            border-radius: 15px;
            padding: 1rem;
            background: ${theme.palette.white};
            min-height: 400px;
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
  theme: PropTypes.object.isRequired
}
