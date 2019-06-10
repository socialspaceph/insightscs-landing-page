import React from 'react'

import ThemeContext from '../../lib/ThemeContext'
import logo from './insightscs-logo.png'

export default function Header() {
  const theme = React.useContext(ThemeContext)

  return (
    <header className="header">
      <img className="logo" src={logo} alt="InsightSCS Logo" />
      <style jsx>
        {`
          .header {
            padding: 1rem;
          }

          @media (min-width: ${theme.breakpoints.md}) {
            .header {
              padding: 1rem 2rem;
            }
          }

          @media (min-width: ${theme.breakpoints.lg}) {
            .header {
              padding: 1rem 2rem;
            }
          }

          @media (min-width: ${theme.breakpoints.xl}) {
            .header {
              padding: 1rem 4rem;
            }
          }

          .logo {
            max-width: 200px;
          }
        `}
      </style>
    </header>
  )
}
