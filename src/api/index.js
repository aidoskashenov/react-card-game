export default {
  async index(numOfCards = 12) {
    const deckRes = await fetch(
      `
      https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    );

    const { deck_id } = await deckRes.json();

    const cardRes = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${numOfCards}`
    );

    return await cardRes.json();
  },
};
