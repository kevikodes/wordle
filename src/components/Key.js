import React, { useContext } from 'react'
import { wordleContext } from '../context/wordleContext'

const Key = ({ keyVal, bigKey }) => {
  const { board, setBoard, currentAttempt, setCurrentAttempt } =
    useContext(wordleContext)
  const selectLetter = () => {
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal
    setBoard(newBoard)
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos + 1,
    })
  }
  return (
    <div className='key' id={bigKey && 'big'} onClick={selectLetter}>
      {keyVal}
    </div>
  )
}

export default Key
