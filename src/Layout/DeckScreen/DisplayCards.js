import React from "react";
import "./DisplayCards.css";
import { Link } from "react-router-dom";
import { deleteCard } from "../../utils/api";

function DisplayCards({ deck }) {
  const cards = deck?.cards;
  const handleDeleteCard = (id) => async () => {
    if (
      window.confirm("Delete this card? You will not be able to recover it.")
    ) {
      const resp = await deleteCard(id);
    }
  };
  return (
    <div>
      <div className="spacer">
        <h1>Cards</h1>
      </div>
      <div className="card-wrapper">
        {cards?.map((card, index) => {
          return (
            <div className="card-c">
              <p className="text">
                <strong> Front: </strong>
                {card.front}
              </p>
              <p className="text">
                <strong>Back:</strong>
                {card.back}
              </p>
              <div className="d-flex justify-content-end">
                <a
                  class="btn btn-secondary mr-1"
                  href={`/decks/${deck.id}/cards/${card.id}/edit`}
                >
                  Edit
                </a>
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  onClick={handleDeleteCard(card.id)}
                >
                  <Link to="/" className="text-white">
                    <span className="oi oi-trash" />
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayCards;
