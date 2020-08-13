import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import api from "api";
import { Card } from "./Card";
import "./Cards.css";

export const Cards = ({ handler }) => {
  const [cards, setCards] = useState([]);

  useEffect(
    () => {
      (async () => {
        const { cards } = await api.index(4);
        // using a spread operator to make new object
        const dupCards = { ...cards };

        // Duplicate the cards and then add unique id to each one (warning 'references')
        const cardsWithIDs = cards.concat(Array.from(cards)).map((card, i) => {
          const cardCopy = { ...card };
          cardCopy.id = `${cardCopy.code}-${i}`;
          return cardCopy;
        });

        setCards(cardsWithIDs);
      })();
    },
    // DO NOT re-trigger this effect after the initial mount - don't worry about state changes!
    []
  );

  const flipHandler = ({ target: { dataset } }) => {
    handler(true);
    const { id, code } = dataset;
    const flippedCards = cards.filter(({ flipped }) => flipped);
      // get the code and ID from the dataset and will filter out flipped cards
    // if there are no flipped cards, we can immediately find and flip the card that matches dataset id(setCards)
    // Check if any cards are currently flipped
    if (!flippedCards.length) {
      setCards(
        cards.map((card) => {
          if (card.id === id) {
            card.flipped = true;
          }
        })
      );
    }
    // as long as there are less that two cards and the clicked  card is not the same id
    // once again  redo things
    if (
      flippedCards.length < 2)
    ) {
      setCards(
        cards.find((card) => {
          if (card.id === id) {
            card.flipped = true;
          }
        })
      );
    }


  };

  const renderCards = () => {
    return cards.map(
      ({ code, id, image, flipped, suit, value, matched }, i) => {
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
      }
    );
  };
  return <div className="container">{renderCards()}</div>;
};
Cards.propTypes = {
  cards: PropTypes.array.isRequired,
  handler: PropTypes.func,
};
