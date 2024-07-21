import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"
import Inventory from "./pages/Inventory/Inventory"

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/inventory" element={<Inventory />} />
    </Routes>
  )
}

export default App