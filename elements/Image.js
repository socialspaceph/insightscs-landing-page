import React from "react";
import getConfig from "next-server/config";
import PropTypes from "prop-types";

const { publicRuntimeConfig } = getConfig();
const linkPrefix = publicRuntimeConfig.linkPrefix;

/**
 * Wraps the href of image with root URL so that it doesnt break in production
 * @param {String} src source of image
 * @param {String} alt description of image
 */
export default function Image({ src, alt, className, noPrefix }) {
  return (
    <img
      className={className}
      src={`${noPrefix ? "" : linkPrefix}${src}`}
      alt={alt}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
