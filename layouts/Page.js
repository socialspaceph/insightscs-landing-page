import React from 'react'
import PropTypes from 'prop-types'

import Meta from '../components/meta'

export default function Page({ children }) {
  return (
    <React.Fragment>
      <Meta />
      {children}
      some footer here
    </React.Fragment>
  )
}

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired,
}
