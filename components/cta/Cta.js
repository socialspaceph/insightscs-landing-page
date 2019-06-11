import React from 'react'

import { Headline, Textline, Button } from '../../elements'

export default function Cta() {
  return (
    <div className="cta-container">
      <Headline centered>Ready to get started?</Headline>
      <Textline>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
        veritatis reiciendis quaerat asperiores eos expedita magni doloribus
        aliquid corrupti. Unde.
      </Textline>
      <Button
        className="button"
        variant="primary"
        style={{ marginTop: '1rem' }}
      >
        Button
      </Button>
      <style jsx>{`
        .cta-container {
          text-align: center;
        }
      `}</style>
    </div>
  )
}
