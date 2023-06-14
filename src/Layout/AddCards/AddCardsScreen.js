import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom/";
import { readDeck, createCard } from "../../utils/api";
import AddCardBreadcrumbNav from "./AddCardBreadcrumbNav";
import CardForm from "../CardForm/Form";

function AddCardsScreen() {
  const ref = React.useRef();
  const deckId = useParams().deckId;
  const [deckToAdd, setDeckToAdd] = useState([]);
  const history = useHistory();

  const initialFormState = {
    front: "",
    back: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await createCard(deckId, formData);
    setFormData({ ...initialFormState });
    ref.current.reset();
    history.push(`/decks/${deckId}/cards/new`);
  };

  // Loading the matching deck from the API
  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      setDeckToAdd(response);
    }
    loadDeck();
  }, []);

  return (
    <div>
      <AddCardBreadcrumbNav deckToAdd={deckToAdd}></AddCardBreadcrumbNav>
      <h2>{deckToAdd.name}: Add Card </h2>
      <form ref={ref} onSubmit={handleSubmit}>
        <CardForm
          cardToEdit={formData}
          handleFrontCardChange={handleChange}
          handleBackCardChange={handleChange}
        ></CardForm>
        {/* <div>
          <label htmlFor="frontCard">Front: </label>
          <textarea
            name="front"
            type="text"
            className="form-style"
            id="front"
            rows="5"
            onChange={handleChange}
            placeholder="Front side of card"
            value={formData.front}
          ></textarea>
        </div>
        <div>
          <label htmlFor="backCard">Back: </label>
          <textarea
            id="back"
            name="back"
            className="form-style"
            rows="5"
            onChange={handleChange}
            placeholder="Back side of card"
            value={formData.back}
          ></textarea>
        </div> */}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => history.push(`/decks/${deckId}`)}
        >
          Done
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddCardsScreen;
