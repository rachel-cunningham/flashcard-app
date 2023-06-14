import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";
import HomeDisplay from "../HomeScreen/HomeDisplay";
import DeckDisplayInfo from "../DeckScreen/DeckDisplayInfo";
import StudyDeck from "../StudyScreen/StudyDeck";
import EditDeckForm from "../EditDeckForm/EditDeckForm";
import AddCardsScreen from "../AddCards/AddCardsScreen";
import CreateDeck from "../CreateDeck/CreateDeck";
import EditCardForm from "../EditCardForm/EditCardForm";

function Layout() {
  return (
    <>
      <Header />
      <div className="container card">
        <Switch>
          <Route exact path="/">
            <HomeDisplay />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCardForm />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCardsScreen />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeckForm />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyDeck />
          </Route>
          <Route path="/decks/:deckId">
            <DeckDisplayInfo />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
