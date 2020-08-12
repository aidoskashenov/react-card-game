import React from "react";
import PropTypes from "prop-types";

export const Timer = ({ toggle }) => {
  return <p>{toggle}</p>;
};

Timer.propTypes = { toggle: PropTypes.bool };

Timer.defaultProps = {
  toggle: false
}
