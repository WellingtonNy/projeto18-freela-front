import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"



import { useState } from "react"
import { UserContext } from "./contexts/UserContext"

export default function App() {
  const [user,setUser] =useState({})
  return (
    <PagesContainer>
      <BrowserRouter>
      <UserContext.Provider value={ {user,setUser} }>
        <Routes>
          
     
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #8c11be;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`
