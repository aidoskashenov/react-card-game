import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";


import { Card } from "./Card";
import "./Cards.css";

export const Cards = ({cards, handler}) => {

  const [flippedCards, setFlippedCards] = useState([]);



 /** useEffect(() => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.id === flippedCards[0].id || card.id === flippedCards[1]?.id) {
          card.flipped = true;
        }
        return card;
      })
    );

    if (flippedCards[0]?.code === flippedCards[1]?.code) {
      cards.map((card) => {
        if (card.id === flippedCards[0].id || card.id === flippedCards[1]?.id) {
          card.flipped = true;
        }
        return card;
      });
    }
  }, [flippedCards]);
*/
  const flipHandler = ({ target: { dataset } }) => {
    //if it's true that there is no length on flippedCards..
    if (!flippedCards.length) {
      setFlippedCards((flippedCards) =>
        flippedCards.concat({ id: dataset.id, code: dataset.code })
      );
    } else if (flippedCards[0].id !== dataset.id) {
      setFlippedCards((flippedCards) =>
        flippedCards.concat({ id: dataset.id, code: dataset.code })
      );
    }
    // we can still add a card as long as it it's not the same card
  };

  return cards.map(({ code, id, image, flipped, suit, value, matched }, i) => (
    <Card
      code={code}
      id={id}
      image={image}
      flipped={flipped}
      suit={suit}
      value={value}
      key={i}
      matched={matched}
      handler={flipHandler}
    />
  ));
};

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
  handler: PropTypes.func,
};
