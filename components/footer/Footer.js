import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <span>SocialSpace Coworking {new Date().getFullYear()}</span>
      <style jsx>{`
        .footer {
          text-align: center;
          font-weight: 600;
          text-transform: uppercase;
          opacity: 0.5;
          padding: 2rem 0;
          letter-spacing: 0.1rem;
        }
      `}</style>
    </footer>
  )
}
