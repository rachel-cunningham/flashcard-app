import React from "react";
// Component to be used in both the Add Card and Edit Card Screens

function CardForm({ cardToEdit, handleFrontCardChange, handleBackCardChange }) {
  return (
    <div>
      <div>
        <label htmlFor="frontOfCard">Front:</label>
        <textarea
          name="front"
          type="text"
          className="form-style"
          id="front"
          rows="3"
          placeholder="Front side of card"
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
          placeholder="Back side of card"
          onChange={handleBackCardChange}
          defaultValue={cardToEdit.back}
        ></textarea>
      </div>
    </div>
  );
}
export default CardForm;
