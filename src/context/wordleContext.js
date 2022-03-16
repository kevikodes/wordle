import { createContext, useState } from 'react'
import { boardDefault } from '../components/Words'

export const wordleContext = createContext()

export const WordleProvider = ({ children }) => {
  const [board, setBoard] = useState(boardDefault)
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  })
  return (
    <wordleContext.Provider
      value={{ board, setBoard, currentAttempt, setCurrentAttempt }}
    >
      {children}
    </wordleContext.Provider>
  )
}
