import React, { useEffect, useState } from "react";
import CreateDeckButton from "../Buttons/CreateDeckButton";
import ViewDeckButton from "../Buttons/ViewDeckButton";
import StudyDeckButton from "../Buttons/StudyDeckButton";
import DeleteDeckButton from "../Buttons/DeleteDeckButton";
import "./HomeDisplay.css";
import { listDecks } from "../../utils/api";

function HomeDisplay() {
  const [decks, setDecks] = useState([]);

  // Loading all of the decks from the API
  useEffect(() => {
    async function loadDecks() {
      const response = await listDecks();
      setDecks(response);
    }
    loadDecks();
  }, []);

  return (
    <div className="container">
      <CreateDeckButton />
      <div className="deck-wrapper">
        {decks.map((deck, index) => {
          return (
            <div className="card-wrap">
              <div key={index} className="card-b">
                <div className="headings">
                  <h5>{deck.name}</h5>
                  <h6>{deck.cards.length} cards</h6>
                </div>
                <p>{deck.description}</p>
                <div className="btn-wrapper">
                  <div>
                    <ViewDeckButton deck={deck} />
                    <StudyDeckButton deck={deck} />
                  </div>
                  <div>
                    <DeleteDeckButton deck={deck} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeDisplay;
