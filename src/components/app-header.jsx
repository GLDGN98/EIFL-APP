import React, { useState } from "react"
import cultureAndSport from "../assets/img/ministry-of-culture.png"
import { Link, useLocation } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import footballIcon from "../assets/img/app-logo-sm.png"
import { motion } from "framer-motion"

export const AppHeader = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  const isActiveLink = (path, currentLocation) => {
    return currentLocation.pathname === path ? { opacity: 1 } : null
  }

  return (
    <div className="app-header full">
      <div className="culture-and-sport">
        <img src={cultureAndSport} alt="" />
        {/* <img src={footballIcon} alt="" /> */}
      </div>
      {!isMobileMenuOpen && (
        <div className={`main-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <Link to="/teams" style={isActiveLink("/teams", location)}>
            קבוצות
          </Link>
          <Link to="/terms" style={isActiveLink("/terms", location)}>
            תקנון
          </Link>
          <Link to="/activities" style={isActiveLink("/activities", location)}>
            למען הקהילה
          </Link>
          <Link to="/table" style={isActiveLink("/table", location)}>
            טבלה
          </Link>
          <Link to="/" style={isActiveLink("/", location)}>
            בית
          </Link>
        </div>
      )}
      {isMobileMenuOpen && (
        <motion.div // Wrap the mobile menu with motion.div
          className={`main-nav ${isMobileMenuOpen ? "open" : ""}`}
          initial={{ x: "100%" }} // Set initial position (off the screen from the right)
          animate={{ x: isMobileMenuOpen ? 0 : "100%" }} // Animate to 0 (visible) when menu is open, back to 100% (off the screen) when closed
          transition={{ type: "tween", duration: 0.3 }} // Define the animation type and duration
        >
          <div className={`main-nav ${isMobileMenuOpen ? "open" : ""}`}>
            <Link
              onClick={toggleMobileMenu}
              to="/teams"
              style={isActiveLink("/teams", location)}
            >
              קבוצות
            </Link>
            <Link
              onClick={toggleMobileMenu}
              to="/terms"
              style={isActiveLink("/terms", location)}
            >
              תקנון
            </Link>
            <Link
              onClick={toggleMobileMenu}
              to="/activities"
              style={isActiveLink("/activities", location)}
            >
              למען הקהילה
            </Link>
            <Link
              onClick={toggleMobileMenu}
              to="/table"
              style={isActiveLink("/table", location)}
            >
              טבלה
            </Link>
            <Link
              onClick={toggleMobileMenu}
              to="/"
              style={isActiveLink("/", location)}
            >
              בית
            </Link>
          </div>
        </motion.div>
      )}
      <div
        className={`hamburger-menu ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        <span className="bar bar1" />
        <span className="bar bar2" />
        <span className="bar bar3" />
      </div>
    </div>
  )
}
