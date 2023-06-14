import React from "react";
import { Link } from "react-router-dom";

function EditCardFormBreadcrumbNav({ deckToEdit, cardToEdit }) {
  let index =
    deckToEdit?.cards?.findIndex((card) => card.id === cardToEdit.id) + 1;
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
          Edit Card {index}
        </li>
      </ol>
    </nav>
  );
}

export default EditCardFormBreadcrumbNav;
