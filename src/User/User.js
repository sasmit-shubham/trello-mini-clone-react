import React from 'react'
import { useState } from 'react'
import Editable from '../Component/Editabled/Editable'
import Navigation from '../Component/Shared/Navigation/Navigation'
import style from "./User.module.css"
import Sidebar from '../Component/Shared/Sidebar/Sidebar'
import CardList from '../Component/CardList/CardList'
import BoardInfo from '../BoardInfo/BoardInfo'
const User = () => {
  const [boards, setBoards] = useState([])
  const [newBoardName,setNewBoardName] = useState("")
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [targetCard, setTargetCard] = useState({
    bid: "",
    cid: "",
  });



  const addCardHandler = (id, title) => {
    const updatedBoards = boards.map((board) => {
        console.log(board);
        if (board.id === selectedBoard.id) {

            const updatedBoard = JSON.parse(JSON.stringify(board));

            const index = updatedBoard.cardListArray.findIndex((item)=>item.id === id)
            console.log(index);
            if(index<0) return;
            updatedBoard.cardListArray[index].cards.push({
                id: Date.now() + Math.random() * 2,
                title,
            })
            

            return updatedBoard;
        }
        return board; // For other boards, return them as they are
    });

    setBoards(updatedBoards);
    setSelectedBoard(updatedBoards.find((board) => board.id === selectedBoard.id));

  };



  const dragEnded = (bid, cid) => {
    let src_cardListIndex, src_cardIndex, target_cardListIndex, target_cardIndex;
    src_cardListIndex = selectedBoard.cardListArray.findIndex((item) => item.id === bid);
    if (src_cardListIndex < 0) return;

    src_cardIndex = selectedBoard.cardListArray[src_cardListIndex].cards.findIndex(
        (item) => item.id === cid
    );
    if (src_cardIndex < 0) return;

    target_cardListIndex = selectedBoard.cardListArray.findIndex((item) => item.id === targetCard.bid);
    if (target_cardListIndex < 0) return;

    const updatedBoards = boards.map((board) => {
        if (board.id === selectedBoard.id) {
            const updatedBoard = JSON.parse(JSON.stringify(selectedBoard));
            const sourceCard = updatedBoard.cardListArray[src_cardListIndex].cards[src_cardIndex];
            updatedBoard.cardListArray[src_cardListIndex].cards.splice(src_cardIndex, 1);
            updatedBoard.cardListArray[target_cardListIndex].cards.push(sourceCard);
            return updatedBoard;
        }
        return board;
    });

    setBoards(updatedBoards);
    setSelectedBoard(updatedBoards.find((board) => board.id === selectedBoard.id));
    setTargetCard({
        bid: "",
        cid: "",
    });
};

  const dragEntered = (bid, cid) => {
    if (targetCard.cid === cid) return;
    setTargetCard({
      bid,
      cid,
    });
  };



  const addBoard = () =>{
    if(newBoardName===''){
        return;
    }
    const newBoard = {
        id: Date.now() + Math.random(),
        name: newBoardName,
        cardListArray:[]
    }

    setBoards([...boards, newBoard]);
    setNewBoardName("");
  }
  
  const addCardListHandler = (name) => {
   
    const updatedBoards = boards.map((board) => {
        console.log(board);
        if (board.id === selectedBoard.id) {
            // Clone the selected board and update its cardListArray
            console.log("you are inside add card list handler"+name)
            const updatedBoard = JSON.parse(JSON.stringify(board));
            updatedBoard.cardListArray.push({
                id: Date.now() + Math.random() * 2,
                title: name,
                cards: [],
            })
            return updatedBoard;
        }
        return board; // For other boards, return them as they are
    });
    setBoards(updatedBoards);
    setSelectedBoard(updatedBoards.find((board) => board.id === selectedBoard.id));
    console.log("update board is" + updatedBoards)
  }


  const onClickHandler = (board) => {
    setSelectedBoard(board)
  }
  const addBoardName = (e) =>{
    setNewBoardName(e.target.value);
  }
  return (
    <div>
        <Navigation addBoardName={addBoardName} addBoard={addBoard} newBoardName={newBoardName}/>
        <Sidebar boards={boards} onClick={onClickHandler} selectedBoard={selectedBoard}/>
        <BoardInfo name={selectedBoard===null?"Create Board Using Create Button":selectedBoard.name}/>
        <div className={style.mainArea}>
        <div>

        </div>
           
            {selectedBoard!==null ? (
            <div className={style.cardListWrapper}>
                
                <div className={style.cardListWrapper}>
                   
                    {selectedBoard.cardListArray.map((item)=>(
                        <CardList
                            key={item.id}
                            board={item}
                            addCard={addCardHandler}
                            dragEnded={dragEnded}
                            dragEntered={dragEntered}
                        />
                    ))}
                </div>
                
                <div className="app_boards_last">
                    <Editable
                        displayClass="app_boards_add-board"
                        editClass="app_boards_add-board_edit"
                        placeholder="Enter List Name"
                        text="Add Another List"
                        buttonText="Add List"
                        onSubmit={addCardListHandler}
                    />
                </div>  
            </div>              
            ):(
                <p>Please select any board to view the card List</p>
            )}
        </div>
    </div>
  )
}

export default User