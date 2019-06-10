import React from 'react'
import PropTypes from 'prop-types'

export default function Section({ children }) {
  return (
    <div>
      {children}
      <style jsx>
        {`
          margin: 4rem 0;
        `}
      </style>
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired,
}
