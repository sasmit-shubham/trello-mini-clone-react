import React from 'react';

import User from './User/User';
import './App.css';


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
