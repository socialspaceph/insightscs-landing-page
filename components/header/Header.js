import React from "react";
import Link from "next/link";
import css from "styled-jsx/css";
import { Image, Container } from "../../elements";

const { className, styles } = css.resolve`
    max-width: 150px;
`;

export default function Header() {
  return (
    <header style={{ backgroundColor: "#FFF" }}>
      <Container>
        <Link href="/">
          <a>
            <Image
              className={className}
              src="/static/img/insightscs-logo.png"
              alt="InsightSCS Logo"
            />
          </a>
        </Link>
        {styles}
      </Container>
    </header>
  );
}
