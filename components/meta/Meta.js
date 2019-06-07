import React from 'react'
import Head from 'next/head'

import website from '../../config/website'
import normalize from '../../styles/normalize'

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
      </Head>
      {/* Global CSS Styles */}
      <style jsx global>{`
        ${normalize}
      `}</style>
    </React.Fragment>
  )
}
