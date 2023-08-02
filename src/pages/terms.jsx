import React, { useState } from "react"
import termImg from "../assets/img/term.png"
import orgImg from "../assets/img/organization1.png"
import timeTableImg from "../assets/img/timetable.png"
import termB from "../assets/img/terms-a.jpg"
import termsBgImage from "../assets/img/rules.jpg"

export const Terms = () => {
  const fileID = "1OOQwcUCpjwriYkM-oT-8DV9q8tJLM5Tj"
  const downloadLink = `https://drive.google.com/uc?export=download&id=${fileID}`
  return (
    <div className="terms-page">
      <div className="terms">
        {/* <img
          className="lazy-background"
          src={termsBgImage}
          alt="terms-background-image"
          loading="lazy"
        /> */}
        <div className="three-terms">
          <div className="term term-3">
            <h1>לוז שנתי</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
              possimus provident odio blanditiis in quia unde quo, aliquid nobis
              dicta, recusandae animi voluptas aperiam, culpa inventore
              molestias sequi atque beatae!
            </p>
            <img src={timeTableImg} alt="" />
          </div>
          <div className="term term-1">
            <h1>תקנון הליגה</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              possimus aliquid quam quaerat vitae nemo ratione saepe
              necessitatibus! Similique, praesentium! Porro modi dignissimos
              accusantium obcaecati a quo reiciendis assumenda facere!
            </p>
            <img src={termImg} alt="" />
          </div>
          <div className="term term-2">
            <h1>מבנה ההנהלה</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus hic dignissimos, asperiores fugit sit quos quas
              numquam aliquid praesentium temporibus! At illum cumque
              asperiores, obcaecati commodi doloribus omnis iure fugit!
            </p>
            <img src={orgImg} alt="" />
          </div>
        </div>
      </div>
      <div className="download-container">
        <div className="download-link">
          <a href={downloadLink} download>
            לחץ כאן להורדת התקנון
          </a>
        </div>
        <img className="term-b" src={termB} alt="" />
      </div>
    </div>
  )
}
