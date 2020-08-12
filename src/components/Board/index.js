import React, { useState, useEffect, Fragment } from "react";
import api from "api";
import { Cards } from "./Cards";
import { Timer } from "./Cards/Timer";

export const Board = () => {
  const [cards, setCards] = useState([]);
  const [toggleTimer, setToggleTimer] = useState(false);

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

  const handleCards = (toggle) => {
    setToggleTimer(toggle);
  };

  return (
    <main>
      <Cards cards={cards} handler={handleCards} />
      <Timer toggle={toggleTimer} />
    </main>
  );
};
