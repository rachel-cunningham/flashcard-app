import React from "react";
import { deleteDeck } from "../../utils/api/index";
import { Link, useHistory } from "react-router-dom";
import "./Button.css";

function DeleteDeckButton({ deck }) {
  const history = useHistory();
  //a warning message is shown and the user can click OK or Cancel.
  const handleDeleteClick = async () => {
    if (
      window.confirm ===
      true("Delete this deck? You will not be able to recover it.")
    ) {
      const resp = await deleteDeck(deck.id);
      history.push(`/decks/`);
    }
  };

  return (
    <div className="button">
      <button
        type="button"
        className="btn btn-danger mr-1"
        onClick={handleDeleteClick}
      >
        <Link to="/" className="text-white">
          <span className="oi oi-trash" />
        </Link>
      </button>
    </div>
  );
}

export default DeleteDeckButton;
