import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { readDeck } from "../../utils/api";
import { useParams } from "react-router-dom";
import "./StudyDeck.css";
import StudyDeckBreadcrumbNav from "./StudyDeckBreadcrumbNavBar";
import AddCardsButton from "../Buttons/AddCardsButton";
import { useHistory } from "react-router-dom/";
function StudyDeck() {
  const history = useHistory();
  const deckId = useParams().deckId;
  const [deck, setDeck] = useState([]);
  const [currentCard, setCurrentCard] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [showPrevious, setShowPrevious] = useState(false);

  // Loading one of the decks from the API
  useEffect(() => {
    async function getDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
      setCurrentCard(response.cards[0]);
    }
    getDeck();
  }, []);

  function handleButtonClicks(buttonType) {
    let currShowBack = showBack;
    let currIndex = currentCardIndex;
    //first chain of if else is handling the click event for buttons and updating the index and flip status
    if (buttonType === "next" && currIndex < deck?.cards?.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowBack(false);
      currShowBack = false;
      ++currIndex;
    } else if (buttonType === "next" && currIndex === deck?.cards?.length - 1) {
      if (window.confirm("Restart Cards?")) {
        setCurrentCardIndex(0);
        setShowBack(false);
        currShowBack = false;
        currIndex = 0;
      } else {
        history.push("/");
      }
    } else if (buttonType === "prev" && currIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      --currIndex;
    } else if (buttonType === "flip") {
      setShowBack(!showBack);
      currShowBack = !currShowBack;
    }
    //this chain of if else shows if next button needs to be shown or not
    if (currIndex === deck?.cards?.length || !currShowBack) {
      setShowNext(false);
    } else if (
      deck?.cards?.length > 1 &&
      currIndex < deck?.cards?.length &&
      currShowBack
    ) {
      setShowNext(true);
    }
    //this chain of if else shows if previous button needs to be shown or not
    if (currIndex === 0) {
      setShowPrevious(false);
    } else if (deck?.cards?.length > 1 && currIndex > 0) {
      setShowPrevious(true);
    }
  }
  if (deck?.cards?.length > 2) {
    return (
      <div>
        <StudyDeckBreadcrumbNav deck={deck} />
        <h1>Study: {deck.name}</h1>
        <div>
          Card {currentCardIndex + 1} of {deck?.cards?.length}
        </div>
        <div>{showBack ? currentCard.back : currentCard.front}</div>
        <div className="buttons">
          {showPrevious ? (
            <button
              onClick={() => {
                handleButtonClicks("prev");
              }}
              id="previous"
              class="btn btn-primary"
            >
              Previous
            </button>
          ) : null}
          <button
            onClick={() => {
              handleButtonClicks("flip");
            }}
            className="btn btn-secondary mx-2"
          >
            Flip
          </button>
          {showNext ? (
            <button
              onClick={() => {
                handleButtonClicks("next");
              }}
              class="btn btn-primary"
            >
              Next
            </button>
          ) : null}
        </div>
      </div>
    );
  } else if (deck?.cards?.length == 2) {
    return (
      <div>
        <StudyDeckBreadcrumbNav deck={deck} />
        <h3>Not enough cards!</h3>
        <p>
          {" "}
          You need at least 3 cards to study. There are {
            deck?.cards?.length
          }{" "}
          cards in this deck.
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <StudyDeckBreadcrumbNav deck={deck} />
        <h3>Not enough cards!</h3>
        <p>
          You need at least 3 cards to study. There is just{" "}
          {deck?.cards?.length} card in this deck.
        </p>
        <div>
          <AddCardsButton deck={deck}></AddCardsButton>
        </div>
      </div>
    );
  }
}

export default StudyDeck;
