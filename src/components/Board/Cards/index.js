import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import api from "api";

import { Card } from "./Card";

export const Cards = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    (async () => {
      const { cards } = await api.index(4);
      // Duplicate the cards and assign each one a uniq id using code and the current index

      const cardsWithDups = cards.concat(Array.from(cards));

      const cardsWithIDs = cardsWithDups.map((card, i) => {
        const cardCopy = JSON.parse(JSON.stringify(card));
        cardCopy.id = `${cardCopy.code}-${i}`;
        return cardCopy;
      });

      setCards(cardsWithIDs);
    })();
  }, []);

  const flipHandler = ({ target: { dataset } }) => {
    //if it's true that there is no length on flippedCards..
if (!flippedCards.length) {
  setFlippedCards((flippedCards) =>
      flippedCards.concat({ id: dataset.id, code: dataset.code })
    );
  } else if (flippedCards[0].id !== dataset.id){  setFlippedCards((flippedCards) =>
    flippedCards.concat({ id: dataset.id, code: dataset.code })
  );
    // we can still add a card as long as it it's not the same card
  }
}



  return cards.map(({ code, id, image, suit, value }, i) => (
    <Card
      code={code}
      id={id}
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
