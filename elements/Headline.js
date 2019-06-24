import React from "react";
import PropTypes from "prop-types";
import ThemeContext from "../lib/ThemeContext";

export default function Headline({ children, centered, variant, ...props }) {
  const theme = React.useContext(ThemeContext);
  return (
    <h2 {...props}>
      {children}
      <style jsx>{`
        font-size: ${variant === "small" ? "1.5rem" : "2rem"};
        margin: 0 0 1rem;

        @media (min-width: ${theme.breakpoints.lg}) {
          font-size: ${variant === "small" ? "2.2rem" : "3rem"};
        }

        ${centered &&
          `
          text-align: center;
        `}
      `}</style>
    </h2>
  );
}

Headline.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired
};
