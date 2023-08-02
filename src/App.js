import React from "react"
import { Home } from "./pages/Home"
import { AppHeader } from "./components/app-header"
import { Routes, Route } from "react-router-dom"
import { About } from "./components/about"
import { Activities } from "./pages/activities"
import { MatchesTable } from "./pages/table"
import { Teams } from "./pages/teams"
import { Terms } from "./pages/terms"

export const App = () => {
  return (
    <div className="main-container">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/table" element={<MatchesTable />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  )
}

//     const headers = ["קבוצה", "'מש", "'נצ", "תיקו", "'הפ", "יחס שערים", "'נק"]
