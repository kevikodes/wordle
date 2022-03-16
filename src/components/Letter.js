import React, { useContext } from 'react'
import { wordleContext } from '../context/wordleContext'

const Letter = ({ letterPos, attemptVal }) => {
  const { board, setBoard } = useContext(wordleContext)
  const letter = board[attemptVal][letterPos]
  return <div className='letter'>{letter}</div>
}

export default Letter
