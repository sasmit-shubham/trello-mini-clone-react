import React from 'react'
import style from "./Card.module.css"
const Card = ({text}) => {
  return (
    <div className={style.card}>
        <div className={style.cardDetail}>
            {text}
        </div>
    </div>
  )
}

export default Card