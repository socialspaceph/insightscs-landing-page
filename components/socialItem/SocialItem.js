import React from 'react'
import PropTypes from 'prop-types'
import ThemeContext from '../../lib/ThemeContext'

export default function SocialItem({ children, href }) {
  const theme = React.useContext(ThemeContext)

  return (
    <a className="socialitem" href={href} target="_blank">
      {children}
      <style>
        {`
         .socialitem {
           width: 2rem;
           height: 2rem;
           border-radius: 50%;
           display: inline-block;
           background-color: ${theme.palette.white};
           display: flex;
           align-items: center;
           justify-content: center;
           box-shadow: 0 5px 10px 1px rgba(205, 29, 29, .2);
           cursor: pointer;
           
           transition: all 200ms ease-in-out;
          }
          
          .socialitem:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px -1px rgba(205, 29, 29, .2);
         }
        `}
      </style>
    </a>
  )
}

SocialItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired,
  href: PropTypes.string.isRequired,
}
