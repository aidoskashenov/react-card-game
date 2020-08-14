import React from "react";
import PropTypes from "prop-types";
export const CardInput = ({ handlerInput }) => {
  return (
    <form onSubmit={handlerInput}>
      <label className="is-size 2"> How many Cards Do you Want

      <input
        type="number"
        placeholder="num of cards"
        id="input"
        className="input is-medium"
      />
      </label>
      <button className="button is-medium is-primary">Click</button>
    </form>
  );
};

CardInput.propTypes = {
  handlerInput: PropTypes.func,
};
