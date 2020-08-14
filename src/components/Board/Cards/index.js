import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "./Cards.css";
import { Card } from "./Card";

import api from "api";

import shuffle from "lodash.shuffle"; // we are importing shuffle from lodash and are using it in line24 on the array it "shuffles" the array

export const Cards = ({ handler, numOfRenderedCards }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      const { cards } = await api.index(numOfRenderedCards/2);

      // Duplicate the cards and then add unique id to each one (⚠️ 'references')
      // this next piece makes it so we have two sets of same cards
      const cardsWithIDs = cards.concat(Array.from(cards)).map((card, i) => {
        // We can do the 'spread' 'shallow copy' for these non-nested objects
        const cardCopy = { ...card }; // this makes a new copy of object with new refs
        cardCopy.id = `${cardCopy.code}-${i}`; // this one is for putting uniq id and this is not a minus its a string this whole thing is a string with template literals
        return cardCopy;
      });

      setCards(shuffle(cardsWithIDs));
    })();
  }, [numOfRenderedCards]);

  const flipHandler = ({ currentTarget: { dataset } }) => {
    const { code, id } = dataset; // this is a continuation of the destructuring it just pulling out the code and id, it can look like this:   ({ currentTarget: { dataset:{code ,id} } })

    const flippedCards = cards.filter(
      ({ flipped, matched }) => flipped && !matched
    );

    handler(true);

    if (flippedCards.length < 2) {
      setCards(truthifyCards("id", "flipped", id));

      // If the codes of the currently flipped card and the dataset match...
      if (flippedCards[0]?.code === code) {
        // ? mark saving a lot easier cause it makes it less strict it asks if cause if there is nothing it will not compile but a ? mark makes it so asks the question
        setCards(truthifyCards("code", "matched", code));

        if (!cards.find(({ matched }) => !matched)) {
          handler(false);
        }
      } else if (flippedCards[0]) {
        setTimeout(() => {
          setCards(resetFlippedCards());
        }, 1500);
      }
    }
  };

  const resetFlippedCards = () =>
    cards.map((card) => {
      card.flipped = false;
      return card;
    });

  const truthifyCards = (
    k2Locate,
    k2Change,
    val2Match //
  ) =>
    cards.map((card) => {
      if (card[k2Locate] === val2Match) {
        card[k2Change] = true;
      }
      return card;
    });

  const renderCards = () =>
    // 'suit' and 'value' are just for alt tag
    cards.map(({ code, flipped, matched, id, image, suit, value }, i) => {
      return (
        <Card
          code={code}
          flipped={flipped}
          id={id}
          image={image}
          matched={matched}
          suit={suit}
          value={value}
          handler={flipHandler}
          key={i}
        />
      );
    });

  return <div className="container">{renderCards()}</div>;
};

Cards.propTypes = {
  handler: PropTypes.func,
  numOfRenderedCards: PropTypes.number,
};
