import { createContext, useState } from 'react'

export const wordleContext = createContext()

export const wordleProvider = ({ children }) => {
  const [board, setBoard] = useState(boardDefault)

  return (
    <wordleContext.Provider value={{ board, setBoard }}>
      {children}
    </wordleContext.Provider>
  )
}
