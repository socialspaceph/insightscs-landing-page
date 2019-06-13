import React from 'react'
import Router from 'next/router'
import App, { Container } from 'next/app'
import { Page } from '../layouts'
import { ThemeProvider } from '../lib/ThemeContext'
import theme from '../config/theme'

import * as gtag from '../lib/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

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
