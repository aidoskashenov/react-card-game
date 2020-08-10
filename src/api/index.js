import React from "react";

export default {
  async index( numOfCards = 12) {
    const deckRes = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const { deck_id } = await res.json();

    const cardsRes = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/?deck_count=${numOfCards}`
    );

    return await cardsRes.json();
  },
};
