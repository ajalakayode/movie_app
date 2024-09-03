"use client"
import { createContext, useState} from "react"

const SidebarContext = createContext() 

const SidebarProvider = ({children}) => {
    const [val, setVal] = useState(0)
    const [movieItem, setMovieItem] = useState([])

  return (
    <SidebarContext.Provider value = {{val, setVal,movieItem, setMovieItem }}>
        {children}
    </SidebarContext.Provider>
  )
}

export {SidebarProvider, SidebarContext}

