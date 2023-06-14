import React from "react";
import { useHistory } from "react-router-dom/";
import "./Button.css";
function ViewDeckButton({ deck }) {
  const history = useHistory();
  return (
    <a class="btn btn-secondary mr-1" href={`/decks/${deck.id}`}>
      View
    </a>
    // <button
    //   type="button"
    //   className="btn-secondary"
    //   onClick={() => history.push(`/decks/${deck.id}`)}
    // >
    //   View
    // </button>
  );
}

export default ViewDeckButton;
