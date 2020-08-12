import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";

import { Card } from "./Card";
import "./Cards.css";

export const Cards = ({ cards, handler }) => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    if (flippedCards.length && flippedCards[0].code === flippedCards[1]?.code) {
      setMatchedCards((prevMatched) =>
        prevMatched.concat(flippedCards[0]?.code)
      );
      setFlippedCards([]);
    }
    if (flippedCards.length === 2) {
      setTimeout(() => {
        setFlippedCards([]);
      }, 3000);
    }
  }, [flippedCards]);

  const flipHandler = ({ target: { dataset } }) => {
    //if it's true that there is no length on flippedCards..
    // id is for uniqly id this card and code is for comparing matching value
    if (dataset && !flippedCards.length) {
      setFlippedCards((flippedCards) =>
        flippedCards.concat({ id: dataset.id, code: dataset.code })
      );
    }
    // this else if is for not to flip the same card 2 times
    else if (flippedCards[0].id !== dataset.id && flippedCards.length < 2) {
      setFlippedCards((flippedCards) =>
        flippedCards.concat({ id: dataset.id, code: dataset.code })
      );
    }
    // we can still add a card as long as it it's not the same card
  };

  const renderCards = () => {
    return cards.map(({ code, id, image, flipped, suit, value, matched }, i) => {
     if (id === flippedCards[0]?.id || id === flippedCards[1]?.id) {
        flipped = true;
      }
      if (matchedCards.includes(code)) {
        flipped = true;
      }

      return (
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
      );
    });
  };
  return <div className="container">{renderCards()}</div>;
};
Cards.propTypes = {
  cards: PropTypes.array.isRequired,
  handler: PropTypes.func,
};
