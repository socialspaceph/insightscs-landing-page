import React from 'react'
import PropTypes from 'prop-types'

import Meta from '../components/meta'
import Footer from '../components/footer'

export default function Page({ children }) {
  return (
    <React.Fragment>
      <Meta />
      {children}
      <Footer />
    </React.Fragment>
  )
}

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired,
}
