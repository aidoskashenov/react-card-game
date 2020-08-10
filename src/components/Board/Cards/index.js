import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Timer } from "./Timer";
import Card from "./Card";
import api from "api";

export const Cards = ({ handler }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      const cards = await api.index();
      setCards(cards);
    })();
  }, []);

  const flipHandler = (event) => {};

  return cards.map(({ image, suit, value, i }) => (
    <Card
      image={image}
      suit={suit}
      value={value}
      key={i}
      handler={flipHandler}
    />
  ));
};

Cards.propTypes = {
  handler: PropTypes.func,
};
