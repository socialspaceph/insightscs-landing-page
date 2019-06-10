import React from 'react'
import Hero from '../components/hero'
import ThemeContext from '../lib/ThemeContext'

import { Container, Section } from '../elements'

export default function Home() {
  const theme = React.useContext(ThemeContext)

  return (
    <Container>
      <Hero theme={theme} />
      <Section>benefits</Section>
      <Section>image area</Section>
      <Section>cta</Section>
    </Container>
  )
}
