import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Timer = ({ toggle }) => {
  const [time, setTime] = useState(0);
  // we are setting up a setInterval while the toggle === true
  useEffect(() => {
    while (toggle) {
      const intervalID = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      //  Cleanup function
      return () => {
        clearInterval(intervalID);
      };
    }
  });

  return <p>{time}</p>;
};

Timer.propTypes = { toggle: PropTypes.bool };

Timer.defaultProps = {
  toggle: false,
};
