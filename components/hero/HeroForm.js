import React from "react";
import PropTypes from "prop-types";
import { heroValidationSchema } from "../../lib/validationSchemas";
import { Formik, Form, Field } from "formik";

import { Button, TextInputGroup } from "../../elements";

import * as gtag from "../../lib/gtag";

export default function HeroForm({ theme }) {
  return (
    <div className="form__wrapper" id="section1">
      <Formik
        validationSchema={heroValidationSchema}
        initialValues={{
          name: "",
          email: "",
          contact: "",
          no_of_trucks: ""
        }}
        onSubmit={values => {
          console.log(values);

          // Send gtag event
          gtag.event({
            action: "submit_form",
            category: "Hero",
            label: values.email
          });
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
            <Field
              name="no_of_trucks"
              id="no_of_trucks"
              label="How many trucks?"
              type="number"
              required
              component={TextInputGroup}
            />
            <Button variant="primary" block>
              Submit
            </Button>
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
            background: ${theme.palette.white};
          }

          @media (min-width: ${theme.breakpoints.md}) {
            .form__wrapper {
              padding: 3rem 2rem;
            }
          }
        `}
      </style>
    </div>
  );
}

HeroForm.propTypes = {
  theme: PropTypes.object.isRequired
};
