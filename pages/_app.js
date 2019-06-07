import React from 'react'
import App, { Container } from 'next/app'
import { Page } from '../layouts'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    )
  }
}
