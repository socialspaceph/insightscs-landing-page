import React from 'react'
import PropTypes from 'prop-types'

import HeroForm from './HeroForm'

export default function Hero({ theme }) {
  return (
    <header className="hero">
      <div className="left">
        <h1 className="headline">
          Future-proof your supply chain operations today
        </h1>
        <p>
          Establish next-gen logistics networks with technology driven
          collaboration and efficiency that provides a direct data relationship
          with carriers through an unbroken chain of custody right up to the
          point of delivery.
        </p>
      </div>
      <div className="right">
        <HeroForm theme={theme} />
      </div>
      <style jsx>{`
        .hero {
          margin-top: 2rem;
          margin-bottom: 4rem;
        }

        .left {
          width: 100%;
        }

        .right {
          width: 100%;
        }

        @media (min-width: ${theme.breakpoints.md}) {
          .hero {
            display: flex;
          }

          .headline {
            font-size: 2.5rem;
            margin-top: 0;
          }

          .left {
            padding-right: 2rem;
          }

          .right {
            max-width: 400px;
            flex-shrink: 0;
          }
        }

        @media (min-width: ${theme.breakpoints.lg}) {
          .right {
            max-width: 500px;
          }
        }
      `}</style>
    </header>
  )
}

Hero.propTypes = {
  theme: PropTypes.object.isRequired,
}
