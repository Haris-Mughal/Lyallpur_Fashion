import React, {createContext, useState} from 'react'

const CountContext = createContext()
export default function CountContextProvider({children}) {
    const [firstName, setFirstName] = useState("Zeeshan")
  return (
    <CountContext.Provider value={{firstName}}>
        {children}
    </CountContext.Provider>
  )
}

