import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <span>InsightSCS Landing Page Styleguide</span>
      <style jsx>
        {`
          .header {
            text-transform: uppercase;
            letter-spacing: 0.1rem;
            opacity: 0.5;
            font-weight: 600;
            text-align: center;
            padding: 2rem 0;
          }
        `}
      </style>
    </header>
  )
}
