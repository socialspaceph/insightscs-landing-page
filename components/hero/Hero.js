import React from 'react'
import PropTypes from 'prop-types'
import website from '../../config/website'

import HeroForm from './HeroForm'
import SocialItem from '../socialItem'
import { FacebookIcon } from '../../icons'

export default function Hero({ theme }) {
  return (
    <header className="hero">
      <div className="left">
        <div className="social-items">
          {website.facebook && (
            <div className="social-item-wrapper">
              <SocialItem href={website.facebook}>
                <FacebookIcon />
              </SocialItem>
            </div>
          )}
        </div>
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

        .social-items {
          // display: flex;
          margin-bottom: 1rem;
        }

        // .social-items .social-item-wrapper {
        //   margin-right: 1rem;
        // }

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
