import React, { useState } from 'react'
import styles from "./Navigation.module.css"
import AddBoardModal from '../../AddBoardModel/AddBoardModel'
const Navigation = ({addBoardName,addBoard,newBoardName}) => {
  const [showModel, setShowModel] = useState(false)
  const onClickHanderForCreateButton = () =>{
    setShowModel(true);
  }

  const onClose = () =>{
    setShowModel(false);
  }
  return (
    <div className={styles.navigation}>
      <div className={styles.right}>
                <img className={styles.logo}src="https://trello.com/assets/87e1af770a49ce8e84e3.gif" alt="trello logo" /> 
                <div className={styles.categoryWrapper}>
                    <span className={styles.categoryTitle}>Workspace</span>
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="white" d="M8.30482 1.72077L4.98651 5.55696L1.3999 1.97035" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div className={styles.categoryWrapper}>
                    <span className={styles.categoryTitle}>Recent</span>
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="white" d="M8.30482 1.72077L4.98651 5.55696L1.3999 1.97035" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div className={styles.categoryWrapper}>
                    <span className={styles.categoryTitle}>Starred</span>
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="white" d="M8.30482 1.72077L4.98651 5.55696L1.3999 1.97035" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div className={styles.categoryWrapper}>
                    <span className={styles.categoryTitle}>Templates</span>
                    <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="white" d="M8.30482 1.72077L4.98651 5.55696L1.3999 1.97035" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div className={styles.categoryWrapper}>
                  <button className={styles.createButton} onClick={onClickHanderForCreateButton}>Create</button>
                  {showModel===true?<AddBoardModal onClose={onClose} addBoardName={addBoardName} addBoard={addBoard}  newBoardName={newBoardName}/>:null}
                </div>
            </div>
            <div className={styles.left}>

            </div>
    </div>
  )
}

export default Navigation