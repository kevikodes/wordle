import { createContext, useState } from 'react'
import { boardDefault } from '../components/Words'

export const wordleContext = createContext()

export const WordleProvider = ({ children }) => {
  const [board, setBoard] = useState(boardDefault)
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  })
  const onSelectLetter = keyVal => {
    if (currentAttempt.letterPos > 4) return
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal
    setBoard(newBoard)
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos + 1,
    })
  }
  const onDelete = () => {
    if (currentAttempt.letterPos === 0) return
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = ''
    setBoard(newBoard)
    setCurrentAttempt({
      ...currentAttempt,
      letterPos: currentAttempt.letterPos - 1,
    })
  }
  const onEnter = () => {
    if (currentAttempt.letterPos !== 5) return
    setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPos: 0 })
  }
  return (
    <wordleContext.Provider
      value={{
        board,
        setBoard,
        currentAttempt,
        setCurrentAttempt,
        onSelectLetter,
        onDelete,
        onEnter,
      }}
    >
      {children}
    </wordleContext.Provider>
  )
}
