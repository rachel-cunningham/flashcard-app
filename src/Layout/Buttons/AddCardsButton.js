import React from "react";
import { useHistory } from "react-router-dom";
import "./Button.css";

function AddCardsButton({ deck }) {
  const history = useHistory();
  return (
    <a
      class="btn btn-primary mr-1 button-margin"
      href={`/decks/${deck.id}/cards/new`}
    >
      + Add Cards
    </a>
    //     <button
    //       type="button"
    //       onClick={() => history.push(`/decks/${deck.id}/cards/new`)}
    //     >
    //       Add Cards
    //     </button>
  );
}

export default AddCardsButton;
