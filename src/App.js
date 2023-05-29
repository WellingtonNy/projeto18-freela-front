import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import { useState } from "react"
import InfoPage from "./pages/InfoPage";


export default function App() {
  const [local,setLocal]=useState('')
  return (
    <>
      <BrowserRouter>
     
        <Routes>
        <Route path="/" element={<HomePage setLocal={setLocal}  />} />
        <Route path="/info" element={<InfoPage local={local} />} />
          
     
        </Routes>
       
      </BrowserRouter>
    </>
  )
}

