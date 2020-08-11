import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import api from "api";

import { Card } from "./Card";

export const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      const { cards } = await api.index(4);
      setCards(cards);
    })();
  }, []);

  const flipHandler = ({ target }) => {
    console.log(target);
  };

  return cards.map((card, i) => (
    <Card
      image={card.image}
      suit={card.suit}
      value={card.value}
      key={i}
      handler={flipHandler}
    />
  ));
};

Cards.propTypes = {};
