import React from "react";
import PropTypes from "prop-types";
import website from "../../config/website";

import HeroForm from "./HeroForm";
import SocialItem from "../socialItem";
import { FacebookIcon } from "../../icons";

export default function Hero({ theme }) {
  return (
    <header className="hero">
      <div className="left">
        <div className="social-items">
          {website.facebook && (
            <div className="social-item-wrapper">
              <SocialItem href={website.facebook}>
                <FacebookIcon />
              </SocialItem>
            </div>
          )}
        </div>
        <h1 className="headline">Supply Chain Finanching for SMEs</h1>
        <p>Get access to faster payouts bank financing with InsightSCS.</p>
      </div>
      <div className="right">
        <HeroForm theme={theme} />
      </div>
      <style jsx>{`
        .hero {
          margin-top: 2rem;
          margin-bottom: 4rem;
        }

        .social-items {
          // display: flex;
          margin-bottom: 1rem;
        }

        // .social-items .social-item-wrapper {
        //   margin-right: 1rem;
        // }

        .left {
          width: 100%;
          color: #fff;
        }

        .right {
          width: 100%;
        }

        @media (min-width: ${theme.breakpoints.md}) {
          .hero {
            display: flex;
          }

          .headline {
            font-size: 3rem;
            margin-top: 0;
          }

          .left {
            padding-right: 2rem;
          }

          .right {
            width: 100%;
            max-width: 400px;
            min-width: 250px;
            // flex-shrink: 0;
          }
        }

        @media (min-width: ${theme.breakpoints.lg}) {
          .left {
            width: 50%;
          }

          .right {
            max-width: 500px;
            margin-left: auto;
          }
        }
      `}</style>
    </header>
  );
}

Hero.propTypes = {
  theme: PropTypes.object.isRequired
};
