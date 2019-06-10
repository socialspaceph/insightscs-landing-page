import React from 'react'
import PropTypes from 'prop-types'

export default function Container({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        background: pink;
      `}</style>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired,
}
