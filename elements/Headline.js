import React from 'react'
import PropTypes from 'prop-types'

export default function Headline({ children }) {
  return (
    <h2>
      {children}
      <style jsx>{`
        padding-left: 1rem;
        margin-left: -1rem;
        margin-bottom: 1rem;
        border-left: 1px solid #ccc;
      `}</style>
    </h2>
  )
}

Headline.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.object]).isRequired,
}
