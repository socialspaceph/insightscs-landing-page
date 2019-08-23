import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import ErrorMessage from './ErrorMessage'

const iff = (condition, then, otherwise) => (condition ? then : otherwise)

export default function SelectInputGroup({
  id,
  name,
  value,
  onChange,
  onBlur,
  label,
  error,
  touched,
  options,
  required,
  ...props
}) {
  const handleChange = val => onChange(name, val)

  const handleBlur = () => onBlur(name, true)

  const customStyles = {
    control: (base, state) => ({
      ...base,
      padding: '0.3rem',
      outline: 'none',
      borderRadius: '0.5rem',
      borderColor: iff(
        state.isFocused,
        '#999',
        !!error && touched ? 'red' : '#c7c7c7'
      ),
      // overwrittes hover style
      boxShadow: iff(
        state.isFocused,
        '0 0 0 0 #999',
        !!error && touched ? '0 0 0 1px red' : ''
      ),
      '&:hover': {
        borderColor: iff(
          state.isFocused,
          '#999',
          !!error && touched ? 'red' : '#c7c7c7'
        )
      }
    })
  }

  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={name}>
        {label}
        {required && <span style={{ color: 'red' }}>*</span>}
      </label>

      <Select
        styles={customStyles}
        id={id}
        options={options}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      {error && touched && <ErrorMessage>{error}</ErrorMessage>}
      <style jsx>{`
        .input-wrapper {
          margin-bottom: 1rem;
          width: 100%;
        }

        .input-label {
          color: #000;
        }
      `}</style>
    </div>
  )
}

SelectInputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
}

SelectInputGroup.defaultProps = {
  required: false,
  error: ''
}
