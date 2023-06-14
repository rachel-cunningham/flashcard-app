import React from "react";
import { useHistory } from "react-router-dom";

function CreateDeckButton() {
  const history = useHistory();
  return (
    <div style={{ marginBottom: "10px" }}>
      <a className="btn btn-outline-primary" href="/decks/new">
        <strong>+ Create Deck</strong>
      </a>
      {/* <button type="button" onClick={() => history.push("decks-new")}>
        Create Deck
      </button> */}
    </div>
  );
}

export default CreateDeckButton;
