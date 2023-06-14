import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StudyDeckButton from "../Buttons/StudyDeckButton";
import DeleteDeckButton from "../Buttons/DeleteDeckButton";
import AddCardsButton from "../Buttons/AddCardsButton";
import EditDeckButton from "../Buttons/EditDeckButton";
import DisplayCards from "./DisplayCards";
import { readDeck } from "../../utils/api";
import "./DeckDisplayInfo.css";

import DeckBreadcrumbNavBar from "./DeckBreadcrumbNavBar";
function DeckDisplayInfo() {
  const deckId = useParams().deckId;
  const [deck, setDeck] = useState([]);

  // Loading one of the decks from the API
  useEffect(() => {
    async function getDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    getDeck();
  }, []);

  //if a deck has been fetched from the API, return it

  if (deck) {
    return (
      <div>
        <DeckBreadcrumbNavBar deck={deck} />
        <div>
          <h3>{deck.name}</h3>
        </div>
        {deck.description}
        <div className="deck-button">
          <div>
            <EditDeckButton deck={deck} />
            <StudyDeckButton deck={deck} />
            <AddCardsButton deck={deck} />
          </div>
          <DeleteDeckButton deck={deck} />
        </div>
        <DisplayCards deck={deck} />
      </div>
    );
  }
  return <div>Loading...</div>;
}

export default DeckDisplayInfo;
