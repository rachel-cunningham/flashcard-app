import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/";
import { createDeck } from "../../utils/api";
import CreateDeckBreadcrumbNavBar from "./CreateDeckBreadcrumbNavBar";
import "./CreateDeck.css";

function CreateDeck() {
  const history = useHistory();
  const initialFormState = {
    name: "",
    description: "",
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
    const response = await createDeck(formData);
    history.push(`/decks/${response.id}`);
    setFormData({ initialFormState });
  };

  return (
    <div>
      <CreateDeckBreadcrumbNavBar></CreateDeckBreadcrumbNavBar>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name:{" "}
            <input
              className="form-style"
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Deck Name"
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description:{" "}
            <textarea
              className="form-style"
              id="description"
              type="text"
              name="description"
              rows="3"
              onChange={handleChange}
              placeholder="Brief Description of the Deck"
            />
          </label>
        </div>
        <div class="c-buttons">
          <button
            name="cancel"
            className="btn btn-secondary mr-1"
            onClick={() => history.push(`/`)}
          >
            Cancel
          </button>
          <div className="divider"> </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateDeck;
