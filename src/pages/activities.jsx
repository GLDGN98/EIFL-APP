import React, { useEffect, useState } from "react"
import image1 from "../assets/img/activtiesImage/WhatsApp Image 2023-08-01 at 11.11.07 (1).jpeg"
import image2 from "../assets/img/activtiesImage/WhatsApp Image 2023-08-01 at 11.11.08 (1).jpeg"
import image3 from "../assets/img/activtiesImage/WhatsApp Image 2023-08-01 at 11.11.10.jpeg"
import communityImg from "../assets/img/peace.png"
export const Activities = () => {
  const [showCards, setShowCards] = useState(false)

  useEffect(() => {
    // Set showCards to true after a short delay to trigger the animation
    setTimeout(() => {
      setShowCards(true)
    }, 500) // Adjust the delay as needed
  }, [])
  return (
    <div dir="rtl" className={`activities ${showCards ? "show" : ""} full`}>
      <h1>פעילויות למען הקהילה</h1>

      <div className="card-grid">
        {/* Card 2 */}
        <div className="card">
          <h2>הנצחה של יהודי אתיופיה</h2>
          <img src={image3} alt="Image 2" />
          <p>
            במסגרת הפעילות של הליגה אנו מציינים את יום הזיכרון ליהודי אתיופיה
            שנספו בדרכם לארץ ישראל. במשך השנה עושים טורניר בוגרים וילדים והגמר
            מתקיים ביום הזיכרון לניספים במקביל עושים גם זיכרון בסלון סביב יום
            הניספים.
          </p>
          <a href="/memorial-tournament">Explore</a>
        </div>

        {/* Card 3 */}
        <div className="card">
          <h2>אימונים וטורנירים לנוער</h2>
          <img src={image2} alt="Image 3" />
          <p>
            במסגרת הפעילות של הליגה אנו מקיימים אימונים לקבוצות הילדים במשך השנה
            באופן קבוע ובנוסף ועושים טורנירים ארציים בחופשות של בתי הספר על מנת
            למנוע שוטטות ומסגרת בלתי פורמאלית חינוכית.
          </p>
          <a href="/youth-training">Find Out More</a>
        </div>
        <div className="card">
          <h2>צביעת בתים לקשישים</h2>
          <img src={image1} alt="Image 1" />

          <p>
            במסגרת הפעילות השוטפת של הליגה קבוצות ילדים ובוגרים מתנדבים וצובעים
            בתים לקשישים וחלוקת סלי מזון.
          </p>
          <a href="/painting-activity">Learn More</a>
        </div>
      </div>
    </div>
  )
}
