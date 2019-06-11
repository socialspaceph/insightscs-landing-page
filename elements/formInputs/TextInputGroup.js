import React from 'react'
import PropTypes from 'prop-types'

import ErrorMessage from './ErrorMessage'

export default function TextInputGroup({
  field: { name, value, onChange, onBlur },
  form: { touched, errors },
  type,
  placeholder,
  label,
  id,
  required,
  ...props
}) {
  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={id}>
        {label}
        {required && <span style={{ color: 'red' }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        {...props}
      />
      {touched[name] && errors[name] && (
        <ErrorMessage>{errors[name]}</ErrorMessage>
      )}
      <style jsx>{`
        .input-wrapper {
          margin-bottom: 1rem;
          width: 100%;
        }

        .input-label {
          color: #000;
        }

        input {
          width: 100%;
          background: #fff;
          border-radius: 0.5rem;
          font-size: 1rem;
          border: 1px solid #d1d1d1;
          padding: 0.75rem;
          outline: none;
          transition: all 200ms ease-in-out;

          ${touched[name] &&
            errors[name] &&
            `border: 1px solid red;
          box-shadow: 0 0 1px 1px red;`}
        }

        input:focus {
          border: 1px solid #999;
          ${touched[name] && errors[name] && `border: 1px solid red;`}
        }
      `}</style>
    </div>
  )
}

TextInputGroup.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
  }).isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  id: PropTypes.string.isRequired,
}

TextInputGroup.defaultProps = {
  type: 'text',
  placeholder: '',
  required: false,
}
