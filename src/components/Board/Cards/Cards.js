import PropTypes from "prop-types";
import React from "react";

export const Card = ({ image, flipped, matched, suit, value, handler }) => {
  return <img src={flipped ? image : "https://source.unsplash.com/random/228x314"} alt={`${value} of ${suit}`} onClick={handler}/>;
};

Card.PropTypes = {
  flipped: PropTypes.bool,
  matched: PropTypes.bool,
  image: PropTypes.string.isRequired,
  suit: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handler: PropTypes.func
};

Card.defaultProps = {
  flipped: false,
  matched: false,
};
