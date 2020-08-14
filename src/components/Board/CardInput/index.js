import React from "react";
import PropTypes from "prop-types";
export const CardInput = ({ handlerInput }) => {
  return (
    <form onSubmit={handlerInput}>
      <label> How many Cards Do you Want</label>

      <input type="number" placeholder="num of cards" id="input" />

      <button>Click</button>
    </form>
  );
};

CardInput.propTypes = {
  handlerInput: PropTypes.func,
};
