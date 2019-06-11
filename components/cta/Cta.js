import React from 'react'
import ThemeContext from '../../lib/ThemeContext'
import { Headline, Textline, Button } from '../../elements'
import { MessageBubble, Wave, Heart, Mail, Rotate } from '../../icons'

export default function Cta() {
  const theme = React.useContext(ThemeContext)

  return (
    <div className="cta-container">
      <div className="icon-container">
        <div className="svg svg-1">
          <Wave />
        </div>
        <div className="svg svg-2">
          <Heart />
        </div>
        <div className="svg svg-6">
          <Heart />
        </div>
        <div className="svg svg-3">
          <Mail />
        </div>
        <div className="svg svg-4">
          <MessageBubble />
        </div>
        <div className="svg svg-5">
          <Rotate />
        </div>
      </div>
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
          position: relative;
          padding-bottom: 2rem;
        }
        .svg {
          width: 30px;
          position: absolute;
          fill: ${theme.palette.primary};
          opacity: 0.2;
          pointer-events: none;
          z-index: -1;
          display: none;
        }

        @media (min-width: ${theme.breakpoints.md}) {
          .svg {
            display: block;
          }
        }

        .svg-1 {
          top: -20%;
          left: 20%;
        }

        .svg-2 {
          top: 20%;
          right: 5%;
        }
        .svg-3 {
          bottom: -30%;
          right: 60%;
        }
        .svg-4 {
          top: 60%;
          left: 5%;
        }
        .svg-5 {
          bottom: 2%;
          right: 20%;
        }
        .svg-6 {
          top: -20%;
          right: 50%;
        }
        .svg-7 {
          top: -10%;
          right: 15%;
        }
      `}</style>
    </div>
  )
}
