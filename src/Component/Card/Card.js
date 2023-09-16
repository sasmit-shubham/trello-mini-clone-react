import React from "react";



import "./Card.css";


function Card(props) {
  const { id, title} = props.card;
  return (
    <>

      <div
        className="card"
        draggable
        onDragEnd={() => props.dragEnded(props.boardId, id)}
        onDragEnter={() => props.dragEntered(props.boardId, id)}
      >

        <div className="card_title">{title}</div>
        
      </div>
    </>
  );
}

export default Card;
