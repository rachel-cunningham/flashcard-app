import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom/";
import { readCard, readDeck, updateCard } from "../../utils/api";
import EditCardFormBreadcrumbNav from "./EditCardFormBreadcrumbNav";

function EditCardForm() {
  const deckId = useParams().deckId;
  const cardId = useParams().cardId;
  const history = useHistory();
  const [deckToEdit, setDeckToEdit] = useState([]);
  const [cardToEdit, setCardToEdit] = useState([]);
  const [frontOfCard, setFrontOfCard] = useState("");
  const [backOfCard, setBackOfCard] = useState("");

  useEffect(() => {
    async function loadDeck() {
      const deck = await readDeck(deckId);
      setDeckToEdit(deck);
      const card = await readCard(cardId);
      setCardToEdit(card);
    }
    loadDeck();
  }, []);

  const handleFrontCardChange = (event) => setFrontOfCard(event.target.value);
  const handleBackCardChange = (event) => setBackOfCard(event.target.value);
  const handleEditCardSubmit = async (event) => {
    event.preventDefault();
    cardToEdit.front = frontOfCard;
    cardToEdit.back = backOfCard;
    const response = await updateCard(cardToEdit);
    history.push(`/decks/${deckId}/`);
  };
  return (
    <div>
      <EditCardFormBreadcrumbNav
        deckToEdit={deckToEdit}
        cardToEdit={cardToEdit}
      ></EditCardFormBreadcrumbNav>
      <h2>Edit Card</h2>
      <form onSubmit={handleEditCardSubmit}>
        <div>
          <label htmlFor="frontOfCard">Front:</label>
          <textarea
            name="front"
            type="text"
            className="form-style"
            id="front"
            rows="3"
            onChange={handleFrontCardChange}
            defaultValue={cardToEdit.front}
          ></textarea>
        </div>
        <div>
          <label htmlFor="backOfCard">Back:</label>
          <textarea
            id="back"
            name="back"
            type="text"
            className="form-style"
            rows="5"
            onChange={handleBackCardChange}
            defaultValue={cardToEdit.back}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => history.push(`decks/${deckId}`)}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditCardForm;
