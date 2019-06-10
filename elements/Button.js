import React from 'react'
import ThemeContext from '../lib/validationSchemas'

export default function Button({ children, variant, rounded, block }) {
  const theme = React.useContext(ThemeContext)

  return (
    <button>
      {children}
      <style jsx>
        {`
          padding: 1rem;
          border: none;
          border-radius: ${rounded ? '1rem' : '0'};
          cursor: pointer;
          display: ${block ? 'block' : 'inline-block'};

          // Secondary (default)
          background-color: ${theme.palette.darkgray};
          color: #000;

          // Primary
          ${variant === 'primary' &&
            `
        background-color: ${theme.palette.primary};
        color: ${theme.palette.white};
      `}
        `}
      </style>
    </button>
  )
}

Button.propTypes = {
  rounded: PropTypes.bool,
  block: PropTypes.bool,
}

Button.defaultProps = {
  rounded: true,
  block: false,
}
