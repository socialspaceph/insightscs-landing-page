import React from 'react'
import getConfig from 'next-server/config'
import Hero from '../components/hero'
import Cta from '../components/cta'
import ThemeContext from '../lib/ThemeContext'
import { Link } from 'react-scroll'

import {
  Headline,
  Textline,
  Container,
  Section,
  Image,
  Button
} from '../elements'

const { publicRuntimeConfig } = getConfig()
const linkPrefix = publicRuntimeConfig.linkPrefix

export default function Home() {
  const theme = React.useContext(ThemeContext)

  return (
    <>
      <Container>
        <div className="bg" />
        <Hero theme={theme} />
        <style jsx>
          {`
            .bg {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0%;
              min-height: 950px;
              // background-color: #666370;
              background: url("${linkPrefix}static/img/bg.jpg") center bottom no-repeat;
              background-size: cover;
              background-attachment: fixed; 
              z-index: -1;
            }
            `}
        </style>
      </Container>
      <div style={{ backgroundColor: '#FFF' }}>
        <div className="benefit-section">
          <div className="graybg" />
          <Section>
            <Container>
              <Headline centered variant="small">
                Small to medium manufacturers & distributors have limited access
                to financing.
              </Headline>
              <div>
                <p style={{ textAlign: 'center' }}>
                  Traditional logistics management makes it hard for SMEs to
                  apply for bank financing because of lack of visibility and
                  inefficient paper-based supply chain systems. Oftentimes,
                  businesses have to wait{' '}
                  <span style={{ color: 'red', fontWeight: 'bold' }}>
                    100+ days
                  </span>{' '}
                  before they get paid. This makes growth extremely difficult,
                  especially for businesses outside Metro Manila.
                </p>
              </div>
            </Container>
          </Section>
          <style jsx>
            {`
              .benefit-section {
                position: relative;
                margin-top: -100px;
              }

              .graybg {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                display: block;
                content: '';
                z-index: -1;
                background: ${theme.palette.white};
                border-top-left-radius: 4rem;
                border-top-right-radius: 4rem;
              }

              @media (min-width: ${theme.breakpoints.md}) {
                .benefits-container {
                  flex-direction: row;
                }

                .benefits__item {
                  max-width: 400px;
                  width: 48%;
                  padding: 1rem;
                  margin: 1%;
                }
              }
            `}
          </style>
        </div>
        <div style={{ backgroundColor: '#f1f1f1' }}>
          <Container>
            <Section>
              <div className="image-section">
                <div className="left">
                  <Headline variant="small">
                    Lower financing risk with Blockchain proof of delivery
                  </Headline>
                  <ul className="list-container">
                    <li>
                      Single platform for accounting, inventory, transport and
                      warehouse management.
                    </li>
                    <li>Secure and immutable proof of delivery.</li>
                    <li>Better rates from banks.</li>
                    <li>Faster payments. (up to 2-5 days)</li>
                  </ul>
                  <Link to="section1" spy={true} smooth={true} duration={1000}>
                    <Button variant="primary" style={{ marginTop: '1rem' }}>
                      Start Application >
                    </Button>
                  </Link>
                </div>
                <div className="right">
                  <div className="insight-app-image">
                    <Image
                      src={`https://res.cloudinary.com/manfuku/image/upload/e_trim/w_1200/f_auto/q_auto/v1552647608/insightscs/photos/epod.png`}
                      alt="InsightSCS mobile application preview"
                    />
                  </div>
                </div>
                <style jsx>
                  {`
                    .image-section {
                      display: flex;
                      flex-direction: column;
                    }

                    .list-container {
                      padding-left: 1rem;
                      list-style: inside;
                    }

                    .cta-button {
                      color: ${theme.palette.primary};
                      letter-spacing: 1px;
                      text-decoration: none;
                      text-transform: uppercase;
                      font-weight: bold;
                      position: relative;
                      display: inline-block;
                      cursor: pointer;
                    }

                    .cta-button span {
                      display: inline-block;
                      width: 18px;
                      height: 18px;
                      position: absolute;
                      top: 50%;
                      right: -1rem;
                      transform: translate(0, -50%);
                      fill: ${theme.palette.primary};
                      transition: all 200ms ease-in-out;
                    }

                    .cta-button:hover span {
                      transform: translate(5px, -50%);
                    }

                    .insight-app-image {
                      max-width: 400px;
                      margin: 0 auto;
                    }

                    .left {
                      margin-bottom: 2rem;
                      text-align: center;
                    }

                    @media (min-width: ${theme.breakpoints.lg}) {
                      .image-section {
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                      }

                      .insight-app-image {
                        max-width: 680px;
                      }

                      .list-container {
                        list-style: outside;
                      }

                      .left {
                        width: 40%;
                        padding-right: 2rem;
                        text-align: left;
                        margin-right: 2rem;
                      }
                    }
                  `}
                </style>
              </div>
            </Section>
          </Container>
        </div>
        <Container>
          <Section>
            <Headline centered variant="small">
              Our financing partners
            </Headline>
            <div className="financing-partners">
              <div className="financing-item">
                <Image
                  src="/static/img/robinsons-bank.png"
                  alt="Robinsons Bank"
                />
              </div>
              <div className="financing-item">
                <Image
                  src="/static/img/UnionBank-Logo_0.png"
                  alt="Union Bank"
                />
              </div>
              <div className="financing-item" style={{ maxWidth: '300px' }}>
                <Image src="/static/img/vesl-logo-pink.png" alt="Vesl" />
              </div>
              <style jsx>{`
                margin-top: 4rem;

                .financing-item {
                  display: block;

                  max-width: 250px;
                  margin: 0 auto 1rem;
                  margin-bottom 2rem; 
                }

                .financing-item:nth-child(1) {
                  display: flex;
                }
                .financing-item:nth-child(1) img {
                  margin: auto 0;
                }

                @media (min-width: ${theme.breakpoints.lg}) {
                  display: flex;
                  align-items: center;
                  justify-content: center;

                  .financing-item {
                    padding: 2rem;
                    display: inline-block;
                    max-width: 350px;
                    // height: 300px;

                    margin: 0;
                  }

                  .financing-item:nth-child(1) {
                    // border-right: 1px solid #ddd;
                  }
                }
              `}</style>
            </div>
          </Section>
        </Container>
        <div style={{ backgroundColor: '#f1f1f1' }}>
          <Container>
            <Section>
              <Headline centered variant="small">
                Success Story
              </Headline>
              <div className="image-section">
                <div className="right">
                  <div className="image-container">
                    <Image
                      src="/static/img/success-story.jpg"
                      alt="Success Story Image"
                    />
                  </div>
                </div>

                <div className="left">
                  <p>
                    Dechan's Gardeneca sells fruits and vegetables to major
                    hotels and restaurants in Boracay. Like other small
                    businesses outside Metro Manila, they had difficulty
                    accessing financing.
                  </p>
                  <p>
                    Through InsightSCS's digitized logistics, Dechan's Gardeneca
                    was able to generate an immutable proof of delivery that
                    they used to get lower rates from our fintech partners. They
                    were also now being paid in days instead of months because
                    they're usign one record instead of filling out dozens of
                    papers after each delivery.
                  </p>
                  <p>
                    In 2 months, Dechan's Gardeneca grew from P200k to P1M in
                    monthly revenue.
                  </p>
                </div>
                <style jsx>
                  {`
                    .image-section {
                      display: flex;
                      flex-direction: column;
                    }

                    .image-container {
                      margin: 0 auto;
                      max-width: 500px;
                    }

                    .cta-button {
                      color: ${theme.palette.primary};
                      letter-spacing: 1px;
                      text-decoration: none;
                      text-transform: uppercase;
                      font-weight: bold;
                      position: relative;
                      display: inline-block;
                      cursor: pointer;
                    }

                    .cta-button span {
                      display: inline-block;
                      width: 18px;
                      height: 18px;
                      position: absolute;
                      top: 50%;
                      right: -1rem;
                      transform: translate(0, -50%);
                      fill: ${theme.palette.primary};
                      transition: all 200ms ease-in-out;
                    }

                    .cta-button:hover span {
                      transform: translate(5px, -50%);
                    }

                    .left {
                      margin-bottom: 2rem;
                      text-align: center;
                    }

                    @media (min-width: ${theme.breakpoints.lg}) {
                      .image-section {
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                      }

                      .left {
                        padding-right: 2rem;
                        text-align: left;
                        width: 40%;
                      }

                      .right {
                        // width: 60%;
                        padding: 2rem;
                      }
                    }
                  `}
                </style>
              </div>
            </Section>
          </Container>
        </div>
        <Container>
          <Section>
            <Cta />
          </Section>
        </Container>
      </div>
    </>
  )
}
