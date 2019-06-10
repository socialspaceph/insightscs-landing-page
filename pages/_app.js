import React from 'react'
import App, { Container } from 'next/app'
import Navbar from '../components/navbar'
import { Page } from '../layouts'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Page>
          <Navbar />
          <Component {...pageProps} />
        </Page>
      </Container>
    )
  }
}
