import React from 'react';
import getConfig from 'next-server/config';
import Hero from '../components/hero';
import Cta from '../components/cta';
import ThemeContext from '../lib/ThemeContext';
import { Link } from 'react-scroll';

import {
  Headline,
  Textline,
  Container,
  Section,
  Image,
  Button
} from '../elements';

const { publicRuntimeConfig } = getConfig();
const linkPrefix = publicRuntimeConfig.linkPrefix;

export default function Home() {
  const theme = React.useContext(ThemeContext);

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
              height: 100%;
              background-color: #666370;
              // background: url("${linkPrefix}static/img/bg.jpg") center bottom no-repeat;
              background-size: cover;
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
              <Headline centered variant="small">
                Lower financing risk with Blockchain proof of delivery
              </Headline>
              <div className="image-section">
                <div className="left">
                  <ul>
                    <li>
                      Single platform for accounting, inventory, transport and
                      warehouse management.
                    </li>
                    <li>Secure and immutable proof of delivery.</li>
                    <li>Better rates from banks.</li>
                    <li>Faster payments. (up to 2-5 days)</li>
                  </ul>
                  <Link to="section1" spy={true} smooth={true} duration={1000}>
                    <Button variant="primary" style={{ width: '100%' }}>
                      Send Application
                    </Button>
                  </Link>
                </div>
                <div className="right">
                  <div style={{ maxWidth: '300px', margin: '0 auto' }}>
                    <Image
                      src={`/static/img/blockchain-pod.png`}
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
                    }

                    @media (min-width: ${theme.breakpoints.md}) {
                      .image-section {
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
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
                <Image src="/static/img/robinsons-bank.png" />
              </div>
              <div className="financing-item">
                <Image src="/static/img/jg-summit.jpg" />
              </div>
              {/* <Image
                style={{ width: '30%' }}
                src="https://via.placeholder.com/500x300?text=Financing+Partner"
              />
              <Image
                style={{ width: '30%' }}
                src=      "https://via.placeholder.com/500x300?text=Financing+Partner"
              /> */}
              <style jsx>{`
                margin-top: 4rem;

                .financing-item {
                  display: block;

                  max-width: 250px;
                  margin: 0 auto 1rem;
                }

                .financing-item:nth-child(1) {
                  display: flex;
                }
                .financing-item:nth-child(1) img {
                  margin: auto 0;
                }

                @media (min-width: ${theme.breakpoints.md}) {
                  display: flex;
                  align-items: center;
                  justify-content: center;

                  .financing-item {
                    padding: 2rem;
                    display: inline-block;
                    max-width: 350px;
                    height: 300px;

                    margin: 0;
                  }

                  .financing-item:nth-child(1) {
                    border-right: 1px solid #ddd;
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
                  <div style={{ maxWidth: '500px', marginRight: 'auto' }}>
                    <Image
                      src="https://via.placeholder.com/1200x800?text=InsightSCS"
                      alt=""
                    />
                  </div>
                </div>

                <div className="left">
                  <p>
                    Bembem Minimart sells fruits and vegetables to major hotels
                    and restaurants in Boracay. Like other small businesses
                    outside Metro Manila, they had difficulty accessing
                    financing.
                  </p>
                  <p>
                    Through InsightSCS's digitized logistics, Bembem Minimart
                    was able to generate an immutable proof of delivery that
                    they used to get lower rates from our fintech partners. They
                    were also now being paid in days instead of months because
                    they're usign one record instead of filling out dozens of
                    papers after each delivery.
                  </p>
                  <p>
                    In 2 months, Bembem Minimart grew from P200k to P1M in
                    monthly revenue.
                  </p>
                </div>
                <style jsx>
                  {`
                    .image-section {
                      display: flex;
                      flex-direction: column;
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

                    @media (min-width: ${theme.breakpoints.md}) {
                      .image-section {
                        flex-direction: row;
                        align-items: center;
                      }

                      .left {
                        padding-right: 2rem;
                        text-align: left;
                        width: 40%;
                      }

                      .right {
                        width: 60%;
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
  );
}
