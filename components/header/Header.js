import React from 'react'
import css from 'styled-jsx/css'
import { Image, Container } from '../../elements'

const { className, styles } = css.resolve`
    max-width: 200px;
`

export default function Header() {
  return (
    <header>
      <Container>
        <Image
          className={className}
          src="/static/img/insightscs-logo.png"
          alt="InsightSCS Logo"
        />
        {styles}
      </Container>
    </header>
  )
}
