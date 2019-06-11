import React from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '../lib/ThemeContext'

export default function Textline({ children, centered }) {
  const theme = React.useContext(ThemeContext)
  return (
    <p>
      {children}
      <style jsx>{`
        width: 100%;
        text-align: center;
        margin: 0;

        @media (min-width: ${theme.breakpoints.lg}) {
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </p>
  )
}

Textline.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired,
}
