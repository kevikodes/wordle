import { createContext, useState } from 'react'
import { boardDefault } from '../components/Words'

export const wordleContext = createContext()

export const WordleProvider = ({ children }) => {
  const [board, setBoard] = useState(boardDefault)
  return (
    <wordleContext.Provider value={{ board, setBoard }}>
      {children}
    </wordleContext.Provider>
  )
}
