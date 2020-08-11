import React from "react";
import PropTypes from "prop-types";

export const Card = ({
  code,
  id,
  flipped,
  matched,
  image,
  value,
  suit,
  handler,
}) => {
  return (
    <button onClick={handler}>
      <img
        alt={`${value} of ${suit}`}
        data-flipped={flipped}
        src={flipped ? image : "https://source.unsplash.com/random/225x314"}
        onClick={handler}
        // Code will be used to just compare the card values
        data-code={code}
        // id will be used used to id the correct card in the array{dataset.id}
        data-id={id}
        className={matched ? "matched" : null}
      />
    </button>
  );
};

Card.propTypes = {
  code: PropTypes.string,
  flipped: PropTypes.bool,
  handler: PropTypes.func,
  id: PropTypes.string,
  image: PropTypes.string.isRequired,
  matched: PropTypes.bool,
  suit: PropTypes.string,
  value: PropTypes.string.isRequired,
};

Card.defaultProps = {
  flipped: false,
  matched: false,
};
