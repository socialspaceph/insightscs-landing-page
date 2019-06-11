import React from 'react'
import { Container } from '../../elements'

export default function Header() {
  return (
    <header>
      <Container>
        <img
          className="logo"
          src="./static/img/insightscs-logo.png"
          alt="InsightSCS Logo"
        />
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
