import React from "react";
import { Link } from "react-router-dom";

function EditFormBreadcrumbNav({ deckToEdit }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${deckToEdit.id}`}>{deckToEdit.name}</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Edit Deck
        </li>
      </ol>
    </nav>
  );
}

export default EditFormBreadcrumbNav;
