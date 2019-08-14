import React from 'react'
import Head from 'next/head'
// import getConfig from "next-server/config";

import website from '../../config/website'
import normalize from '../../styles/normalize'

// const { publicRuntimeConfig } = getConfig();
// const linkPrefix = publicRuntimeConfig.linkPrefix;

/**
 * Sets the values for the </head> element.
 * @includes metadata values and the global css styles
 */
export default function Meta() {
  return (
    <React.Fragment>
      <Head>
        <title>{website.siteTitle}</title>
        <meta name="description" content={website.siteDescription} />
        <meta name="author" content={website.siteAuthor} />

        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Alegreya+Sans:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* Global CSS Styles */}
      <style jsx global>{`
        ${normalize}

        *, *::before, *::after {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;

          font-family: 'Alegreya Sans', sans-serif;
          font-size: 110%;
        }

        body {
          background-size: cover;
          background-attachment: fixed;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: 'Poppins', sans-serif;
        }

        p {
          line-height: 1.5rem;
        }

        img {
          display: block;
          width: 100%;
        }
      `}</style>
    </React.Fragment>
  )
}
