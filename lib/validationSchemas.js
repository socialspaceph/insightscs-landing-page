import { object, string, email } from 'yup'

/**
 * Form validations for hero
 * @param {name}
 * @param {email}
 * @param {contact}
 */
export const heroValidationSchema = object().shape({
  name: string().required('Please input your name'),
  email: string()
    .required('Please input your email address')
    .email('Please input a valid email address'),
  contact: string().required('Please input your contact number'),
  company_name: string().required('Please input your company name'),
  revenue: string().required('Please input your average monthly revenue')
})
