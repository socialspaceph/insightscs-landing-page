import React from "react";
import PropTypes from "prop-types";
import ThemeContext from "../lib/ThemeContext";

export default function Container({ children, ...props }) {
  const theme = React.useContext(ThemeContext);

  return (
    <div {...props}>
      {children}
      <style jsx>{`
        padding: 1rem;
        max-width: 1600px;
        margin: 0 auto;

        @media (min-width: ${theme.breakpoints.md}) {
          padding: 1rem 2rem;
        }

        @media (min-width: ${theme.breakpoints.lg}) {
          padding: 1rem 2rem;
        }

        @media (min-width: ${theme.breakpoints.xl}) {
          padding: 1rem 4rem;
        }

        @media (min-width: ${theme.breakpoints.xxl}) {
          padding: 1rem 6rem;
        }
      `}</style>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired
};
