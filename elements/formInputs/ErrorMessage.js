import React from 'react'
import PropTypes from 'prop-types'

export default function ErrorMessage({ children }) {
  return (
    <span>
      {children}
      <style jsx>
        {`
          color: red;
          font-size: 15px;
          margin-top: 0.5rem;
          display: block;
        `}
      </style>
    </span>
  )
}

ErrorMessage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired,
}
