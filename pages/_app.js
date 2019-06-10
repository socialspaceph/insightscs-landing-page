import React from 'react'
import App, { Container } from 'next/app'
import { Page } from '../layouts'
import { ThemeProvider } from '../lib/ThemeContext'

import theme from '../config/theme'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider value={theme}>
        <Container>
          <Page>
            <Component {...pageProps} />
          </Page>
        </Container>
      </ThemeProvider>
    )
  }
}
