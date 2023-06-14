import React from "react";
import { useHistory } from "react-router-dom/";
import "./Button.css";

function StudyDeckButton({ deck }) {
  const history = useHistory();
  return (
    <a
      class="btn btn-primary mr-1 button-margin"
      href={`/decks/${deck.id}/study`}
    >
      Study
    </a>
    // <button
    //   type="button"
    //   className="btn-primary"
    //   onClick={() => history.push(`/decks/${deck.id}/study`)}
    // >
    //   Study
    // </button>
  );
}

export default StudyDeckButton;
