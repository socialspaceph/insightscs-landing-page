import React from 'react';
import css from 'styled-jsx/css';
import { Image, Container } from '../../elements';
import ThemeContext from '../../lib/ThemeContext';

const { className, styles } = css.resolve`
  max-width: 200px;
`;

export default function Footer() {
  const theme = React.useContext(ThemeContext);

  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrapper">
          <div className="footer__logo">
            <Image
              className={className}
              src="/static/img/insightscs-logo-white.png"
              alt="InsightSCS Logo White"
            />
          </div>
          <strong>HEADQUARTERS</strong>
          <p style={{ marginTop: '0' }}>
            Ground Floor, CTP Alpha Tower
            <br /> Investment Drive, Madrigal Business Park
            <br /> Ayala Alabang, Muntinlupa, 1778, Philippines
          </p>
          <a href="mailto:inquiry@insightscs.com">inquiry@InsightSCS.com</a>
          <p>
            Copyright {new Date().getFullYear()}. Patent Pending Philippines.
          </p>
        </div>
      </Container>
      {styles}
      <style jsx>{`
        .footer {
          padding: 3rem 0;
          color: ${theme.palette.white};
          background: ${theme.palette.primary};
        }

        .footer__wrapper > a {
          font-weight: bold;
          display: block;
          color: white;
          text-decoration: none;
        }

        strong {
          display: block;
          font-weight: bold;
          opacity: 0.5;
          margin: 0.5rem 0;
        }

        .footer__logo > img {
          max-width: 200px;
        }
      `}</style>
    </footer>
  );
}
