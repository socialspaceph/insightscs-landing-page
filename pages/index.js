import React from 'react'
import Hero from '../components/hero'

import { Headline, Container } from '../elements'

export default function Home() {
  return (
    <Container>
      <Hero />
      <div className="row">
        <Headline>Typography</Headline>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          earum quasi aliquam ad debitis? Dolore possimus dolor, error nesciunt
          eaque est architecto! Qui recusandae ab cum vitae placeat magni
          similique nemo sint corporis, officia porro quibusdam esse aliquid
          dolorum vero quos eligendi laudantium libero eveniet autem temporibus
          doloribus. Sunt eius possimus facilis consequatur perspiciatis
          temporibus error deserunt ad optio? Odit?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          illo recusandae, nisi provident ab cum consequuntur fugiat ex dolores
          temporibus quia dolorum expedita, quas et nostrum aut harum
          necessitatibus perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          dolorem qui obcaecati, omnis sequi sint tempore quisquam, iusto
          provident ducimus quia soluta in? Cum necessitatibus sapiente nisi sed
          nemo ab eveniet impedit nostrum, nihil velit, iure debitis inventore,
          atque quidem.
        </p>
      </div>
      <div className="row">
        <Headline>Colors</Headline>
        <div className="colors-container">
          <div
            style={{ backgroundColor: '#000', height: '100px', width: '100%' }}
          />
          <div
            style={{
              backgroundColor: '#CD1D1D',
              height: '100px',
              width: '100%',
            }}
          />
          <div
            style={{
              backgroundColor: '#F2F2F2',
              height: '100px',
              width: '100%',
            }}
          />
        </div>
      </div>
      <style jsx>
        {`
          .row {
            margin-bottom: 3rem;
          }

          .colors-container {
            display: flex;
          }
        `}
      </style>
    </Container>
  )
}
