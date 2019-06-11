import React from 'react'
import Hero from '../components/hero'
import ThemeContext from '../lib/ThemeContext'

import { Headline, Textline, Container, Section } from '../elements'

export default function Home() {
  const theme = React.useContext(ThemeContext)

  return (
    <React.Fragment>
      <Container>
        <Hero theme={theme} />
      </Container>
      <div className="benefit-section">
        <div className="graybg" />
        <Section>
          <Container>
            <Headline centered>Subtitle</Headline>
            <Textline>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              illum esse voluptatem? Nulla error perferendis fugiat dicta
              similique repudiandae cum?
            </Textline>
            <div className="benefits-container">
              <div className="benefits__item">
                <img
                  src="https://via.placeholder.com/350x225?text=InsightSCS"
                  alt="placeholder"
                />
                <div className="content">
                  <h3>Benefit 1</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit maxime recusandae nam eius magni, praesentium quod ab!
                    Aspernatur, consequuntur sint!
                  </p>
                </div>
              </div>
              <div className="benefits__item">
                <img
                  src="https://via.placeholder.com/350x225?text=InsightSCS"
                  alt="placeholder"
                />
                <div className="content">
                  <h3>Benefit 2</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit maxime recusandae nam eius magni, praesentium quod ab!
                    Aspernatur, consequuntur sint!
                  </p>
                </div>
              </div>
              <div className="benefits__item">
                <img
                  src="https://via.placeholder.com/350x225?text=InsightSCS"
                  alt="placeholder"
                />
                <div className="content">
                  <h3>Benefit 3</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit maxime recusandae nam eius magni, praesentium quod ab!
                    Aspernatur, consequuntur sint!
                  </p>
                </div>
              </div>
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
              background: ${theme.palette.gray};
              border-top-left-radius: 4rem;
              border-top-right-radius: 4rem;
            }

            .benefits-container {
              display: flex;
              justify-content: center;
              flex-direction: column;
              margin-top: 3rem;
              flex-wrap: wrap;
            }

            .benefits__item {
              width: 100%;
              margin-bottom: 2rem;
            }

            .benefits__item > img {
              display: block;
              width: 100%;
            }

            @media (min-width: ${theme.breakpoints.md}) {
              .benefits-container {
                flex-direction: row;
              }

              .benefits__item {
                width: 48%;
                padding: 1rem;
                margin: 1%;
              }
            }

            @media (min-width: ${theme.breakpoints.lg}) {
              .benefits__item {
                width: 31.33%;
                margin: 1%;
              }
            }
          `}
        </style>
      </div>
      <Container>
        <Section>image area</Section>
        <Section>cta</Section>
      </Container>
    </React.Fragment>
  )
}
