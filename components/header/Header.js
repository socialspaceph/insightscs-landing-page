import React from 'react'
import { Container } from '../../elements'

import logo from './insightscs-logo.png'

export default function Header() {
  return (
    <header>
      <Container>
        <img className="logo" src={logo} alt="InsightSCS Logo" />
      </Container>
      <style jsx>
        {`
          .logo {
            max-width: 200px;
          }
        `}
      </style>
    </header>
  )
}
