import React, { useState } from "react";

import { Cards } from "./Cards";
import { Timer } from "./Cards/Timer";
import { CardInput } from "./CardInput";


export const Board = () => {
  const [toggleTimer, setToggleTimer] = useState(false);
  const [numOfRenderedCards, setNumOfRenderedCards] = useState(4);

  const handleCards = (toggle) => {
    setToggleTimer(toggle);
  };

  const numOfRenderedCardsToSet = (event) => {
    event.preventDefault();
    console.log(event.target.input.value);
    setNumOfRenderedCards(Number(event.target.input.value));
  };

  return (
    <main>
      <Cards handler={handleCards} numOfRenderedCards={numOfRenderedCards} />
      <Timer toggle={toggleTimer} />
      <CardInput handlerInput={numOfRenderedCardsToSet} />
    </main>
  );
};
