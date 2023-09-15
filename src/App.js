import React from 'react';
import Navigation from './Component/Shared/Navigation/Navigation';
import User from './User/User';
import './App.css';
import Card from './Component/Shared/Card/Card';
import Editable from './Component/Editabled/Editable';
import CardList from './Component/CardList/CardList';

import { useState, useEffect } from 'react';

function App() {
  
  // useEffect(() => {
  //   localStorage.setItem("prac-kanban", JSON.stringify(cardLists));
  // }, [cardLists]);
  // const onInputChange = (e) => {
  //   setBoard(e.target.value);
  // };
  return (
    <div className="app">
      <div className="app_nav">
        <h1>Trello Clone</h1>
      </div>
      <User/>
    </div>
  );
}

export default App;
