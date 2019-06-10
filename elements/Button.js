import React from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '../lib/ThemeContext'

export default function Button({ children, variant, notrounded, block }) {
  const theme = React.useContext(ThemeContext)

  const getButtonVariant = variant => {
    let classNames = ['button']

    switch (variant) {
      case 'primary':
        return (classNames = [...classNames, 'primary'])
      case 'outline':
        return (classNames = [...classNames, 'outline'])
      default:
        return classNames
    }
  }

  return (
    <button className={getButtonVariant(variant).join(' ')}>
      {children}
      <style jsx>
        {`
          .button {
            padding: 0.75rem;
            border: none;
            border-radius: ${!notrounded ? '2rem' : '0'};
            cursor: pointer;
            width: ${block ? '100%' : 'auto'};
            display: ${block ? 'block' : 'inline-block'};
            transition: all 200ms ease-in-out;
            text-transform: uppercase;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;

            // Default
            background-color: ${theme.palette.darkgray};
            color: #222;
          }

          .button:hover {
            background-color: #e1e1e1;
          }

          .primary {
            background-color: ${theme.palette.primary};
            color: ${theme.palette.white};
          }

          .primary:hover {
            background-color: #f62b2b;
          }

          .outline {
            background-color: transparent;
            border: 1px solid ${theme.palette.primary};
            color: ${theme.palette.primary};
          }

          .outline:hover {
            background-color: ${theme.palette.primary};
            color: ${theme.palette.white};
          }
        `}
      </style>
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired,
  variant: PropTypes.string,
  notrounded: PropTypes.bool,
  block: PropTypes.bool,
}

Button.defaultProps = {
  variant: '',
  notrounded: false,
  block: false,
}
