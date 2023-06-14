import React from "react";
import { useHistory } from "react-router-dom";
import "./Button.css";

function EditDeckButton({ deck }) {
  const history = useHistory();
  return (
    <a
      class="btn btn-secondary mr-1 button-margin"
      href={`/decks/${deck.id}/edit`}
    >
      Edit
    </a>
    // <button
    //   type="button"
    //   onClick={() => history.push(`/decks/${deck.id}/edit`)}
    // >
    //   Edit
    // </button>
  );
}

export default EditDeckButton;
