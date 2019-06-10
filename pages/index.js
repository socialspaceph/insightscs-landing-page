import React from 'react'
import Hero from '../components/hero'

import { Container, Section } from '../elements'

export default function Home() {
  return (
    <Container>
      <Hero />
      <Section>benefits</Section>
      <Section>image area</Section>
      <Section>cta</Section>
    </Container>
  )
}
