import React from "react";


import Card from "../Card/Card";
import Editable from "../Editabled/Editable";

import style from "./CardList.module.css";

function CardList(props) {
  

  return (
    <div className={style.cardList}>
      <div className={style.cardList_header}>
        <p className={style.cardList_header_title}>
          {props.board?.title}
          <span>{props.board?.cards?.length || 0}</span>
        </p>

      </div>
      <div className={style.cardList_cards}>
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            boardId={props.board.id}
            dragEntered={props.dragEntered}
            dragEnded={props.dragEnded}
          />
        ))}
        <Editable
          text="+ Add Card"
          placeholder="Enter Card Title"
          displayClass={style.cardList_add_card}
          editClass={style.cardList_add_card_edit}
          onSubmit={(value) => props.addCard(props.board?.id, value)}
        />
      </div>
    </div>
  );
}

export default CardList;
