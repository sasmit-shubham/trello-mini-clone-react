import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { useState } from 'react';
import styles from './AddBoardModel.module.css'
import TextInput from "../Shared/TextInput/TextInput"




const AddBoardModal = ({ onClose,addBoardName,addBoard,newBoardName}) => {
  const [boardType, setBoardType] = useState('open');
  const [topic, setTopic] = useState('');


  return (
    <div className={styles.modalMask}>
      <div className={styles.modalBody}>
        <button onClick={onClose} className={styles.closeButton}>
          <AiOutlineClose size="1.5rem" />
        </button>
        <div className={styles.modalHeader}>
          <h3 className={styles.heading}>Enter the topic to be discussed</h3>
          <TextInput fullwidth='true' value={newBoardName} onChange={(e) => addBoardName(e)} />
          <h2 className={styles.roomTypesText}>Room Types</h2>
          <div className={styles.roomTypes}>
            <div onClick={() => setBoardType('open')}
              className={`${styles.typeBox} ${boardType === 'open' ? styles.active : ''}`}>
              <img src="/worldwide.png" alt="globe" width={50} height={50} />
              <span>Open</span>
            </div>
            <div onClick={() => setBoardType('private')}
              className={`${styles.typeBox} ${boardType === 'private' ? styles.active : ''}`}>
              <img src="/private.png" alt="" width={50} height={50} />
              <span>Private</span>
            </div>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <h2>Start a room, open to everyone</h2>
          <button className={styles.footerButton} onClick={()=>{addBoard(); onClose();}}>
            <img src="/images/party.png" alt="" width={20} height={20} />
            <span>Let's go</span>
          </button>
        </div>
      </div>


    </div>
  )
}

export default AddBoardModal