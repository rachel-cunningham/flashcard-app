import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom/";
import { readDeck, updateDeck } from "../../utils/api";
import EditFormBreadcrumbNav from "./EditDeckFormBreadcrumbNav";

function EditDeckForm() {
  const deckId = useParams().deckId;
  const [deckToEdit, setDeckToEdit] = useState([]);
  // const [decktoUpdate, updateDeck] = useState([]);
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");
  const history = useHistory();

  // Loading the matching deck from the API
  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      setDeckToEdit(response);
      setDeckName(response.name);
      setDeckDescription(response.description);
    }
    loadDeck();
  }, []);

  const handleDeckNameChange = (event) => setDeckName(event.target.value);
  const handleDeckDescriptionChange = (event) =>
    setDeckDescription(event.target.value);

  const handleEditDeckSubmit = async (event) => {
    event.preventDefault();
    deckToEdit.name = deckName;
    deckToEdit.description = deckDescription;
    const res = await updateDeck(deckToEdit);
    history.push(`/decks/${deckToEdit.id}`);
  };

  return (
    <div>
      <EditFormBreadcrumbNav deckToEdit={deckToEdit}></EditFormBreadcrumbNav>
      <h1>Edit Deck </h1>
      <form onSubmit={handleEditDeckSubmit}>
        <div>
          <label htmlFor="deckName">Name: </label>
          <input
            name="deckName"
            type="text"
            className="form-control"
            id="deckName"
            onChange={handleDeckNameChange}
            defaultValue={deckToEdit.name}
          ></input>
        </div>
        <div>
          <label htmlFor="deckDescription">Description: </label>
          <textarea
            id="deckDescription"
            name="deckDescription"
            className="form-control"
            rows="5"
            onChange={handleDeckDescriptionChange}
            defaultValue={deckToEdit.description}
          />
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => history.push(`/decks/${deckId}`)}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditDeckForm;
