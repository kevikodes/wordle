import React, { useContext } from 'react'
import { wordleContext } from '../context/wordleContext'

const Key = ({ keyVal, bigKey }) => {
  const {
    board,
    setBoard,
    currentAttempt,
    setCurrentAttempt,
    onSelectLetter,
    onDelete,
    onEnter,
  } = useContext(wordleContext)
  const selectLetter = () => {
    if (keyVal === 'ENTER') {
      onEnter()
    } else if (keyVal === 'DELETE') {
      onDelete()
    } else {
      onSelectLetter(keyVal)
    }
  }
  return (
    <div className='key' id={bigKey && 'big'} onClick={selectLetter}>
      {keyVal}
    </div>
  )
}

export default Key
