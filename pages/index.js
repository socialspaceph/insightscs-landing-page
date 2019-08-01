import React from "react";
import getConfig from "next-server/config";
import Hero from "../components/hero";
import Cta from "../components/cta";
import ThemeContext from "../lib/ThemeContext";
import { Link } from "react-scroll";

import {
  Headline,
  Textline,
  Container,
  Section,
  Image,
  Button
} from "../elements";
import { Shippers, Consignees, Transporters, Financers } from "../icons";

const { publicRuntimeConfig } = getConfig();
const linkPrefix = publicRuntimeConfig.linkPrefix;

export default function Home() {
  const theme = React.useContext(ThemeContext);

  return (
    <>
      <Container>
        <div className="bg" />
        <Hero theme={theme} />
        <style jsx>
          {`
            .bg {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0%;
              height: 100%;
              background: url("${linkPrefix}static/img/bg.jpg") center bottom no-repeat;
              background-size: cover;
              z-index: -1;
            }
            `}
        </style>
      </Container>
      <div style={{ backgroundColor: "#FFF" }}>
        <div className="benefit-section">
          <div className="graybg" />
          <Section>
            <Container>
              <Headline centered variant="small">
                Small to medium manufacturers & distributors have limited access
                to financing.
              </Headline>
              <div>
                <p style={{ textAlign: "center" }}>
                  Traditional logistics management makes it hard for SMEs to
                  apply for bank financing because of lack of visibility and
                  inefficient paper-based supply chain systems. Oftentimes,
                  businesses have to wait{" "}
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    100+ days
                  </span>{" "}
                  before they get paid. This makes growth extremely difficult,
                  especially for businesses outside Metro Manila.
                </p>
              </div>
            </Container>
          </Section>
          <style jsx>
            {`
            .benefit-section {
              position: relative;
              margin-top: -100px;
            }

            .graybg {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              width: 100%;
              display: block;
              content: "";
              z-index: -1;
              background: ${theme.palette.white};
              border-top-left-radius: 4rem;
              border-top-right-radius: 4rem;
            }

            @media (min-width: ${theme.breakpoints.md}) {
              .benefits-container {
                flex-direction: row;
              }

              .benefits__item {
                max-width: 400px;
                width: 48%;
                padding: 1rem;
                margin: 1%;
              }
            }

            // @media (min-width: ${theme.breakpoints.lg}) {
            //   .benefits__item {
            //     width: 31.33%;
            //     margin: 1%;
            //   }
            // }
          `}
          </style>
        </div>
        <div style={{ backgroundColor: "#f1f1f1" }}>
          <Container>
            <Section>
              <Headline centered variant="small">
                Lower financing risk with Blockchain proof of delivery
              </Headline>
              <div className="image-section">
                <div className="left">
                  <ul>
                    <li>
                      Single platform for accounting, inventory, transport and
                      warehouse management.
                    </li>
                    <li>Secure and immutable proof of delivery.</li>
                    <li>Better rates from banks.</li>
                    <li>Faster payments. (up to 2-5 days)</li>
                  </ul>
                  <Link to="section1" spy={true} smooth={true} duration={1000}>
                    <Button variant="primary" style={{ width: "100%" }}>
                      Send Application
                    </Button>
                  </Link>
                </div>
                <div className="right">
                  <div style={{ maxWidth: "500px", marginLeft: "auto" }}>
                    <Image
                      src="https://via.placeholder.com/1200x800?text=InsightSCS"
                      alt=""
                    />
                  </div>
                </div>
                <style jsx>
                  {`
                    .image-section {
                      display: flex;
                      flex-direction: column;
                    }

                    .cta-button {
                      color: ${theme.palette.primary};
                      letter-spacing: 1px;
                      text-decoration: none;
                      text-transform: uppercase;
                      font-weight: bold;
                      position: relative;
                      display: inline-block;
                      cursor: pointer;
                    }

                    .cta-button span {
                      display: inline-block;
                      width: 18px;
                      height: 18px;
                      position: absolute;
                      top: 50%;
                      right: -1rem;
                      transform: translate(0, -50%);
                      fill: ${theme.palette.primary};
                      transition: all 200ms ease-in-out;
                    }

                    .cta-button:hover span {
                      transform: translate(5px, -50%);
                    }

                    .left {
                      margin-bottom: 2rem;
                      text-align: center;
                    }

                    @media (min-width: ${theme.breakpoints.md}) {
                      .image-section {
                        flex-direction: row;
                        align-items: center;
                      }

                      .left {
                        width: 40%;
                        padding-right: 2rem;
                        text-align: left;
                      }

                      .right {
                        width: 60%;
                      }
                    }
                  `}
                </style>
              </div>
            </Section>
          </Container>
        </div>
        <Container>
          <Section>
            <Headline centered variant="small">
              Our financing partners
            </Headline>
            <div
              style={{ display: "flex", maxWidth: "1000px", margin: "0 auto" }}
            >
              <Image
                style={{ width: "30%" }}
                src="https://via.placeholder.com/500x300?text=Financing+Partner"
              />
              <Image
                style={{ width: "30%" }}
                src="https://via.placeholder.com/500x300?text=Financing+Partner"
              />
            </div>
          </Section>
        </Container>
        <div style={{ backgroundColor: "#f1f1f1" }}>
          <Container>
            <Section>
              <Headline centered variant="small">
                Success Story
              </Headline>
              <div className="image-section">
                <div className="right">
                  <div style={{ maxWidth: "500px", marginRight: "auto" }}>
                    <Image
                      src="https://via.placeholder.com/1200x800?text=InsightSCS"
                      alt=""
                    />
                  </div>
                </div>

                <div className="left">
                  <ul>
                    <li>BemBem Minimart</li>
                    <li>
                      Boracay-based SME that supplies fruits & vegetables to
                      hotels and restaurants.
                    </li>
                    <li>
                      4x monthly revenue growth, faster payout rate. (2-5 days
                      versus 100+ days)
                    </li>
                  </ul>
                </div>
                <style jsx>
                  {`
                    .image-section {
                      display: flex;
                      flex-direction: column;
                    }

                    .cta-button {
                      color: ${theme.palette.primary};
                      letter-spacing: 1px;
                      text-decoration: none;
                      text-transform: uppercase;
                      font-weight: bold;
                      position: relative;
                      display: inline-block;
                      cursor: pointer;
                    }

                    .cta-button span {
                      display: inline-block;
                      width: 18px;
                      height: 18px;
                      position: absolute;
                      top: 50%;
                      right: -1rem;
                      transform: translate(0, -50%);
                      fill: ${theme.palette.primary};
                      transition: all 200ms ease-in-out;
                    }

                    .cta-button:hover span {
                      transform: translate(5px, -50%);
                    }

                    .left {
                      margin-bottom: 2rem;
                      text-align: center;
                    }

                    @media (min-width: ${theme.breakpoints.md}) {
                      .image-section {
                        flex-direction: row;
                        align-items: center;
                      }

                      .left {
                        padding-right: 2rem;
                        text-align: left;
                        width: 40%;
                      }

                      .right {
                        width: 60%;
                      }
                    }
                  `}
                </style>
              </div>
            </Section>
          </Container>
        </div>
        <Container>
          <Section>
            <div className="image-section">
              <div className="left">
                <Headline>Join us today</Headline>
                <p style={{ fontSize: "1.2rem" }}>
                  Apply for supply chain financing and get access to InsightSCS
                  app.
                </p>
                <Link to="section1" spy={true} smooth={true} duration={1000}>
                  <Button variant="primary" style={{ width: "100%" }}>
                    Send Application
                  </Button>
                </Link>
              </div>
              <div className="right">
                <div style={{ maxWidth: "500px", marginLeft: "auto" }}>
                  <Image
                    src="https://via.placeholder.com/1200x800?text=InsightSCS"
                    alt=""
                  />
                </div>
              </div>
              <style jsx>
                {`
                  .image-section {
                    display: flex;
                    flex-direction: column;
                  }

                  .cta-button {
                    color: ${theme.palette.primary};
                    letter-spacing: 1px;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-weight: bold;
                    position: relative;
                    display: inline-block;
                    cursor: pointer;
                  }

                  .cta-button span {
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    position: absolute;
                    top: 50%;
                    right: -1rem;
                    transform: translate(0, -50%);
                    fill: ${theme.palette.primary};
                    transition: all 200ms ease-in-out;
                  }

                  .cta-button:hover span {
                    transform: translate(5px, -50%);
                  }

                  .left {
                    margin-bottom: 2rem;
                    text-align: center;
                  }

                  @media (min-width: ${theme.breakpoints.md}) {
                    .image-section {
                      flex-direction: row;
                      align-items: center;
                    }

                    .left {
                      width: 40%;
                      padding-right: 2rem;
                      text-align: left;
                    }

                    .right {
                      width: 60%;
                    }
                  }
                `}
              </style>
            </div>
          </Section>
        </Container>
      </div>
    </>
  );
}
