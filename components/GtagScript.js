import React, { useEffect, useState } from 'react'
import Head from 'next/head'

const GA_TRACKING_ID = 'GTM-54HCX9H'

export default function GtagScript() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <React.Fragment>
      {loaded && (
        <Head>
          <script
            id="gtm-js"
            async
            src={`https://www.googletagmanager.com/gtm.js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || {};
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');
        `,
            }}
          />
        </Head>
      )}
    </React.Fragment>
  )
}
