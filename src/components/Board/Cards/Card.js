import PropTypes from "prop-types";
import React from "react";

export const Card = ({
  code,
  id,
  image,
  flipped,
  matched,
  suit,
  value,
  handler,
}) => {
  return (
    <button onClick={handler} data-code={code} data-id={id}>
      <img
        src={flipped ? image : "https://source.unsplash.com/random/226x314"}
        alt={`${value} of ${suit}`}
        // 'code' will be used to just compare the 'card values'

        // id will be used to id the correct card in our Array of cards (dataset.id)

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
  suit: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Card.defaultProps = {
  flipped: false,
  matched: false,
};
