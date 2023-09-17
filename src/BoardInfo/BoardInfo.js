import React from 'react'
import style from "./Board.module.css"
const BoardInfo = ({name}) => {
  return (
    <div>
        <div className={style.boardInfo}>
            <h3>{name}</h3>
            <button className={style.addListButton}>+Add User</button>
        </div>
    </div>
  )
}

export default BoardInfo